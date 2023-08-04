'use client';
import { Container } from 'react-bootstrap';

import { buildCategoryUrl } from '@/utils';
import data from '@data/contrarianmba.json';
import Link from 'next/link';

export default function Home() {
    return (
        <Container>
            <div className="d-flex mt-3">
                {data.categories.map((category) => (
                    <Link
                        className="category-labels"
                        key={category}
                        href={buildCategoryUrl(category)}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </Container>
    );
}
