import { AMAZON_TRACKING_ID } from '@/constants';
import { BookID, BookType, CategoryType } from '@data/contrarianmba.json';

export class Book implements BookType {
    id: BookID;
    title: string;
    summary: string;
    category: CategoryType;
    bestInCategory: boolean;
    amazonProductID: string;
    hasInventory: boolean;

    constructor(book: BookType) {
        Object.assign(this, book);
    }

    get amazonProductURL(): string {
        return `https://www.amazon.com/dp/${this.amazonProductID}?tag=${AMAZON_TRACKING_ID}&language=en_US`;
    }

    get amazonImageURL(): string {
        return `https://www.amazon.com/dp/${this.amazonProductID}?tag=${AMAZON_TRACKING_ID}&language=en_US`;
    }

    get imageURL(): string {
        return `/images/products/${this.amazonProductID}.jpg`;
    }
}
