'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';
import { PageTitle } from '@/components/PageTitle';

export default function Credits() {
    return (
        <>
            <PageTitle title="Credits" />
            <Container>
                <h3>Content</h3>
                <ul>
                    <li>
                        Books curated by the CEO of a top YC company, a true
                        contrarian.
                    </li>
                </ul>
                <h3>Graphics</h3>
                <ul>
                    <li>
                        <a
                            className="text-decoration-none"
                            href="https://www.flaticon.com/free-icons/business-and-finance"
                        >
                            Innovation FavIcon - Business and Finance Icons
                        </a>
                    </li>
                </ul>
            </Container>
        </>
    );
}
