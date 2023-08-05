'use client';
import { Hero } from '@/components/Hero';
import data from '@data/contrarianmba.json';
import { Col, Container, Row } from 'react-bootstrap';
import { BookCategoryView } from '../components/Book';

export default function Home() {
    const books = Object.values(data.lookups.book_id);

    return (
        <>
            <Hero />
            <Container>
                <Row>
                    {books.map((book) => (
                        <Col key={book.id} lg={3}>
                            <BookCategoryView book={book} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
