'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';

import { Book, Category } from '@/types';
import { BookCategoryView } from '@/components/Book';

import {
    lookUpBookById,
    lookUpBookIdsByCategory,
    resolveCategorySlug,
} from '@/utils';
import { BookID } from '@data/contrarianmba.json';

type Props = {
    categorySlug: string;
};

export function CategoryBooks({ categorySlug }: Props) {
    const category = resolveCategorySlug(categorySlug);

    if (typeof category === 'undefined') {
        notFound();
    }

    const bookIds: string[] = lookUpBookIdsByCategory(category);
    const books: Book[] = bookIds.map((bookId: BookID) =>
        lookUpBookById(bookId)
    );

    return (
        <Container>
            <Row>
                {books.map((book: Book) => (
                    <Col lg={3} key={book.id}>
                        <BookCategoryView book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
