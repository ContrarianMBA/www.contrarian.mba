'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';

export default function Credits() {
    return (
        <Container>
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
    );
}