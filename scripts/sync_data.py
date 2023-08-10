# Python Standard Library Imports
import os
import urllib.request
import json
import pathlib
import sys
from collections import defaultdict


# isort: off


FOLDER = pathlib.Path(__file__).parent.parent / "data"
PUBLIC_FOLDER = pathlib.Path(__file__).parent.parent / "public"

AMAZON_TRACKING_ID = "contrarianmba-20"


CONTRARIANMBA_RAW_JSON_FILENAME = FOLDER / "contrarianmba_raw.json"
CONTRARIANMBA_JSON_FILENAME = FOLDER / "contrarianmba.json"


def main():
    """Contrarian MBA Processing Pipeline

    0. Before this script is run:
       a. AirTable URL: https://airtable.com/appx0Y49B7e3L9Jj9/tblmSL7CUvVnEMpPD/viwNMIhyabmnjE82d?blocks=hide
    1. Run this script. The steps:
       a. Download records from AirTable
       b. Go through each record and collect:
          i. Title
          ii. Category
          iii. Best in Category?
          iv. Summary
          v. Amazon Product ID
       c. Build lookup tables for books
          i. By ID
          ii. By Category
    """
    # TODO: add a -f flag to force re-downloading if the file already exists
    # download_contrarianmba_airtable_records()
    # process_records()
    download_product_images()


def download_contrarianmba_airtable_records():
    from lib.airtable import AirtableAPI

    api_key_ro = "patTOv6Q7gBehXamj.45ca41a0f133ae0decbb748ca3511acab943dce1eedbd45587a4aeb0f196b84e"  # hello@contrarian.mba  # noqa: E501
    api_key_rw = None
    base_id = "appx0Y49B7e3L9Jj9"

    api = AirtableAPI(base_id, api_key_ro, api_key_rw)

    book_records = api.fetch_records("Books", "Table", limit=1000)
    category_records = api.fetch_records("Categories", "Table", limit=100)

    data = {
        "books": book_records,
        "categories": category_records,
    }

    with open(CONTRARIANMBA_RAW_JSON_FILENAME, "w") as f:
        f.write(json.dumps(data, indent=4))
        f.write("\n")


def download_product_images():
    with open(CONTRARIANMBA_JSON_FILENAME, "r") as f:
        data = json.loads(f.read())
        books = [book for book in data["lookups"]["book_id"].values()]

    for book in books:
        image_url = build_amazon_image_url(book["amazonProductID"])
        image_path = f"{PUBLIC_FOLDER}/images/products/{book['amazonProductID']}.jpg"

        if os.path.exists(image_path):
            print(f"Book Image {image_path} already exists.")
        else:
            urllib.request.urlretrieve(image_url, image_path)
            print(f"Book Image {book['amazonProductID']}.jpg added")


def build_amazon_image_url(product_id):
    url = f"http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN={product_id}&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag={AMAZON_TRACKING_ID}"  # noqa: E501
    return url


class AirTableRecord:
    """Base class for AirTable records

    Subclasses:
    - Category
    - Book
    """

    _BY_RECORD_ID = (
        {}
    )  # NOTE: this is shared across all subclasses as well, but that's okay

    def __init__(self, raw_record):
        self.raw_record = raw_record

        self.__class__._BY_RECORD_ID[self.record_id] = self

    @classmethod
    def from_raw(cls, raw_record):
        obj = cls(raw_record)
        return obj

    @classmethod
    def by_id(cls, record_id):
        obj = cls._BY_RECORD_ID[record_id]
        return obj

    @property
    def record_id(self):
        return self.raw_record["id"]

    @property
    def fields(self):
        return self.raw_record["fields"]


class Category(AirTableRecord):
    @property
    def name(self):
        return self.fields["Name"]

    @property
    def order(self):
        return self.fields.get("Order", 999999)


class Book(AirTableRecord):
    def as_dict(self):
        payload = {
            "id": self.record_id,
            "title": self.title,
            "category": self.category.name,
            "bestInCategory": self.best_in_category,
            "summary": self.summary,
            "amazonProductID": self.amazon_product_id,
            "hasInventory": self.has_inventory,
        }
        return payload

    @property
    def title(self):
        return self.fields.get("Title")

    @property
    def category(self):
        category_id = self.fields["Category"][0]
        category = Category.by_id(category_id)
        return category

    @property
    def best_in_category(self):
        return self.fields.get("Best in Category?", False)

    @property
    def summary(self):
        return self.fields.get("Summary", "")

    @property
    def amazon_product_id(self):
        return self.fields["Amazon Product ID"]

    @property
    def amazon_image_url(self):
        url = f"http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN={self.amazon_product_id}&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag={AMAZON_TRACKING_ID}"  # noqa: E501
        return url

    @property
    def has_inventory(self):
        return self.fields.get("Has Inventory?", False)


def process_records():
    with open(CONTRARIANMBA_RAW_JSON_FILENAME, "r") as f:
        data = json.loads(f.read())
        books = [Book.from_raw(record) for record in data["books"]]
        categories = sorted(
            (Category.from_raw(record) for record in data["categories"]),
            key=lambda category: category.order,
        )

    category_names = [category.name for category in categories]
    books_by_id = {}
    books_by_category = defaultdict(list)

    for book in books:
        # print(book.raw_record)
        books_by_id[book.record_id] = book
        books_by_category[book.category.name].append(book.record_id)

    processed_data = {
        "categories": category_names,
        "lookups": {
            "book_id": {
                book_id: book.as_dict() for book_id, book in books_by_id.items()
            },
            "category": {
                category: book_id for category, book_id in books_by_category.items()
            },
        },
    }

    with open(CONTRARIANMBA_JSON_FILENAME, "w") as f:
        f.write(json.dumps(processed_data, indent=4))
        f.write("\n")


if __name__ == "__main__":
    main()
