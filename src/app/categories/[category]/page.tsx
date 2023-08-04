'use client';
import data, { Book, BookID } from '@data/contrarianmba.json';
import { Col, Container, Row } from 'react-bootstrap';
import { BookCategoryView } from '@/components/Book';
import { getCategoryFromURLParam } from '@/utils';

type Props = {
    params: {
        category: string;
    };
};
export default function CategoryPage({ params: { category } }: Props) {
    const categoryName = getCategoryFromURLParam(category);
    console.log(categoryName, category);
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
                    <Col lg={3} key={book.id}>
                        <BookCategoryView book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
