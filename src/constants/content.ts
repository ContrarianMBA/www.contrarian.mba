import DATA, { BookID } from '@data/contrarianmba.json';

import { Book, Category } from '@/types';

export const CATEGORIES: Category[] = DATA.categories.map(
    (category) => new Category(category)
);

export const CATEGORIES_BY_SLUG: { [key: string]: Category } =
    CATEGORIES.reduce(
        (collection, category) => ({
            ...collection,
            [category.slug]: category,
        }),
        {}
    );

export const BOOK_IDS_BY_CATEGORY: { [key: string]: BookID[] } =
    DATA.lookups.category;

export const BOOKS_BY_ID: { [key: BookID]: Book } = Object.keys(
    DATA.lookups.book_id
).reduce(
    (collection, bookId) => ({
        ...collection,
        [bookId]: new Book(DATA.lookups.book_id[bookId]),
    }),
    {}
);
