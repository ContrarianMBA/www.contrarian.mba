declare module '@data/contrarianmba.json' {
    export type BookID = string;
    export type Category = string;

    export interface Book {
        id: BookID;
        title: string;
        summary: string;
        category: Category;
        bestInCategory: boolean;
        amazonProductID: string;
        amazonProductURL: string;
        amazonImageURL: string;
        hasInventory: boolean;
    }

    interface Data {
        categories: Category[];
        lookups: {
            book_id: { [key: BookID]: Book };
            category: { [key: Category]: BookID[] };
        };
    }

    const data: Data = {};
    export default data;
}
