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

        this.amazonImageURL = `/images/products/${this.amazonProductID}.jpg`;
    }
}
