'use client';
import { BookCategoryView } from '@/components/Book';
import { getCategoryFromURLParam } from '@/utils';
import data, { Book, BookID } from '@data/contrarianmba.json';
import { Col, Container, Row } from 'react-bootstrap';

type Props = {
    params: {
        category: string;
    };
};
export default function CategoryPage({ params: { category } }: Props) {
    const categoryName = getCategoryFromURLParam(category);
    const bookIds: string[] = data.lookups.category[categoryName];
    const books: Book[] = bookIds.reduce(
        (filtered: Book[], id: BookID) => [
            ...filtered,
            data.lookups.book_id[id],
        ],
        [],
    );
    return (
        <Container>
            <h1>{categoryName}</h1>
            <Row>
                {books.map((book) => (
                    <Col lg={4} key={book.id}>
                        <BookCategoryView book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
