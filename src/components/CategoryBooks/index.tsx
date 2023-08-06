'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';

import { Book, Category } from '@/types';
import { BookCategoryView } from '@/components/Book';

import { lookUpBookById, lookUpBookIdsByCategory } from '@/utils';
import { BookID } from '@data/contrarianmba.json';

type Props = {
    category: Category;
};

export function CategoryBooks({ category }: Props) {
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
