'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import data, { Book, BookID } from '@data/contrarianmba.json';
import { BookCategoryView } from '@/components/Book';
import { CategoryTitle } from '@/components/CategoryTitle';
import { getCategoryFromURLParam } from '@/utils';

type Props = {
    params: {
        category: string;
    };
};
export default function CategoryPage({ params: { category } }: Props) {
    const categoryName = getCategoryFromURLParam(category);
    const bookIds: string[] = data.lookups.category[categoryName];
    if (typeof bookIds === 'undefined') {
        notFound();
    }
    const books: Book[] = bookIds.reduce(
        (filtered: Book[], id: BookID) => [
            ...filtered,
            data.lookups.book_id[id],
        ],
        [],
    );
    return (
        <>
            <CategoryTitle category={categoryName} />
            <Container>
                <Row>
                    {books.map((book) => (
                        <Col lg={3} key={book.id}>
                            <BookCategoryView book={book} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
