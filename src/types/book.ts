import { BookType } from '@data/contrarianmba.json';
import { AMAZON_TRACKING_ID } from '@/constants';

export class Book {
    constructor(book: BookType) {
        Object.keys(book).forEach((key) => {
            this[key] = book[key];
        });

        this.amazonProductURL = `https://www.amazon.com/dp/${this.amazonProductID}?tag=${AMAZON_TRACKING_ID}&language=en_US`;

        this.amazonImageURL = `https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${this.amazonProductID}&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=${AMAZON_TRACKING_ID}`;
    }
}
