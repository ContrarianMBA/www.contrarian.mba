import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/PageTitle';
import { CategoryBooks } from '@/components/CategoryBooks';
import { CATEGORIES } from '@/constants';
import { resolveCategorySlug } from '@/utils';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = resolveCategorySlug(slug);

    if (typeof category === 'undefined') {
        notFound();
    }

    return (
        <>
            <PageTitle title={category.name} />
            <CategoryBooks categorySlug={slug} />
        </>
    );
}

export function generateStaticParams() {
    const paths = CATEGORIES.map(({ slug }) => ({ slug }));
    return paths;
}
