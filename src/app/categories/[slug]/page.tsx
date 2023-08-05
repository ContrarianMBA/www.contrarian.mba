'use client';
import { notFound } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';

import { BookID } from '@data/contrarianmba.json';
import { CategoryTitle } from '@/components/CategoryTitle';
import { CategoryBooks } from '@/components/CategoryBooks';
import { Book } from '@/types';
import { CATEGORIES } from '@/constants';
import { resolveCategorySlug } from '@/utils';

type Props = {
    params: {
        slug: string;
    };
};
export default function CategoryPage({ params: { slug } }: Props) {
    const category = resolveCategorySlug(slug);

    return (
        <>
            <CategoryTitle category={category} />
            <CategoryBooks category={category} />
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
