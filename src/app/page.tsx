'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';
import { Hero } from '@/components/Hero';
import { CategoryTitle } from '@/components/CategoryTitle';
import { CategoryBooks } from '@/components/CategoryBooks';

export default function Home() {
    return (
        <>
            <Hero />
            {CATEGORIES.map((category) => (
                <section key={category.slug}>
                    <Container>
                        <Row>
                            <Col>
                                <h3>{category.name}</h3>
                            </Col>
                        </Row>
                    </Container>
                    <CategoryBooks category={category} />
                </section>
            ))}
        </>
    );
}
