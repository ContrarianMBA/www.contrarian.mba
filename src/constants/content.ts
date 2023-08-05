import DATA, { BookID, BookType } from '@data/contrarianmba.json';

import { Category } from '@/types';

export const CATEGORIES: Category[] = DATA.categories.map(
    (category) => new Category(category)
);

export const CATEGORIES_BY_SLUG: { [key: string]: Category } = {};
CATEGORIES.forEach((category) => {
    CATEGORIES_BY_SLUG[category.slug] = category;
});

export const BOOK_IDS_BY_CATEGORY: { [key: string]: BookID[] } =
    DATA.lookups.category;

export const BOOKS_BY_ID: { [key: string]: BookType[] } = DATA.lookups.book_id;
