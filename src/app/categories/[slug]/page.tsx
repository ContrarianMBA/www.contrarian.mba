'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';

import { BookID } from '@data/contrarianmba.json';
import { BookCategoryView } from '@/components/Book';
import { CategoryTitle } from '@/components/CategoryTitle';
import { Book } from '@/types';
import { CATEGORIES } from '@/constants';
import {
    lookUpBookById,
    lookUpBookIdsByCategory,
    resolveCategorySlug,
} from '@/utils';

type Props = {
    params: {
        slug: string;
    };
};
export default function CategoryPage({ params: { slug } }: Props) {
    const category = resolveCategorySlug(slug);
    const bookIds: string[] = lookUpBookIdsByCategory(category);
    if (typeof bookIds === 'undefined') {
        notFound();
    }
    const books: Book[] = bookIds.map((bookId: BookID) =>
        lookUpBookById(bookId)
    );

    return (
        <>
            <CategoryTitle category={category} />
            <Container>
                <Row>
                    {books.map((book: Book) => (
                        <Col lg={3} key={book.id}>
                            <BookCategoryView book={book} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const slugs = CATEGORIES.map((category) => category.slug);

    const paths = slugs.map((slug) => {
        return {
            params: {
                slug,
            },
        };
    });

    const result = {
        paths,
        fallback: false,
    };
    return result;
}
