declare module '@data/contrarianmba.json' {
    export type BookID = string;
    export type CategoryType = string;

    export interface BookType {
        id: BookID;
        title: string;
        summary: string;
        category: CategoryType;
        bestInCategory: boolean;
        amazonProductID: string;
        // amazonProductURL?: string;
        // amazonImageURL?: string;

        hasInventory: boolean;
    }

    interface Data {
        categories: CategoryType[];
        lookups: {
            book_id: { [key: BookID]: BookType };
            category: { [key: CategoryType]: BookID[] };
        };
    }

    const DATA: Data = {};
    export default DATA;
}
