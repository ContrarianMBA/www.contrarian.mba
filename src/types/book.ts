import { BookID, BookType, CategoryType } from '@data/contrarianmba.json';
import { AMAZON_TRACKING_ID } from '@/constants';

export class Book implements BookType {
    id: BookID;
    title: string;
    summary: string;
    category: CategoryType;
    bestInCategory: boolean;
    amazonProductID: string;
    amazonProductURL: string;
    amazonImageURL: string;
    hasInventory: boolean;

    constructor(book: BookType) {
        Object.assign(this, book);

        this.amazonProductURL = `https://www.amazon.com/dp/${this.amazonProductID}?tag=${AMAZON_TRACKING_ID}&language=en_US`;

        this.amazonImageURL = `https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${this.amazonProductID}&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=${AMAZON_TRACKING_ID}`;
    }
}
