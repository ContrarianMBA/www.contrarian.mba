'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import data, { Book, BookID } from '@data/contrarianmba.json';
import { BookCategoryView } from '@/components/Book';
import { CategoriesSideBar } from '@/components/Categories';
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
        <Container className="mt-5 pt-5">
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
                            <Col lg={4} key={book.id}>
                                <BookCategoryView book={book} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
