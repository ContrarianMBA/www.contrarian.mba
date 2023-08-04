'use client';
import data, { Book, BookID } from '@data/contrarianmba.json';
import { Col, Container, Row } from 'react-bootstrap';
import { BookCategoryView } from '@/components/Book';
import { getCategoryFromURLParam } from '@/utils';
import { CategoriesSideBar } from '@/components/Categories';

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
            <Row>
                <Col lg={3}>
                    <h4>Categories</h4>
                    <CategoriesSideBar />
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col sm={12}>
                            <h1>{categoryName}</h1>
                        </Col>
                        {books.map((book) => (
                            <Col lg={3} key={book.id}>
                                <BookCategoryView book={book} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
