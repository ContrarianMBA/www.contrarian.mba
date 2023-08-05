import Link from 'next/link';
import { Nav } from 'react-bootstrap';

import { CATEGORIES } from '@/constants';

type Props = {
    navClassName: string;
    linkClassName: string;
};

export function CategoryNav({ navClassName, linkClassName }: Props) {
    return (
        <Nav className={navClassName}>
            {CATEGORIES.map((category) => (
                <Nav.Link
                    key={category.slug}
                    as={Link}
                    href={category.url}
                    className={linkClassName}
                >
                    {category.name}
                </Nav.Link>
            ))}
        </Nav>
    );
}
