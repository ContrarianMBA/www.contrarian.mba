import Link from 'next/link';
import { Nav } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';

export function CategoryNav() {
    return (
        <Nav className="category-nav d-none d-lg-flex align-items-center justify-content-center">
            {CATEGORIES.map((category) => (
                <Nav.Link
                    key={category.slug}
                    as={Link}
                    href={category.url}
                    className="link-body-emphasis text-sm"
                >
                    {category.name}
                </Nav.Link>
            ))}
        </Nav>
    );
}
