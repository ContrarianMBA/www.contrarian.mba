'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';

export default function Jobs() {
    return (
        <Container>
            <h3>Jobs</h3>
            Earn a real-world MBA by working at one of these top startups!
            <ul>
                <li>
                    <a
                        className="text-decoration-none"
                        href="https://www.ycombinator.com/companies?top_company=true"
                    >
                        Top YC Companies
                    </a>
                </li>
            </ul>
        </Container>
    );
}
