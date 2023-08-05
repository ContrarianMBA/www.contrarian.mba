import { BookID } from '@data/contrarianmba.json';
import { Book, Category } from '@/types';
import {
    BOOKS_BY_ID,
    BOOK_IDS_BY_CATEGORY,
    CATEGORIES_BY_SLUG,
} from '@/constants';

export function resolveCategorySlug(categorySlug: string): Category {
    return CATEGORIES_BY_SLUG[categorySlug];
}

export function lookUpBookIdsByCategory(category: Category): BookID[] {
    return BOOK_IDS_BY_CATEGORY[category.name];
}

export function lookUpBookById(bookId: BookID): Book {
    return BOOKS_BY_ID[bookId];
}
