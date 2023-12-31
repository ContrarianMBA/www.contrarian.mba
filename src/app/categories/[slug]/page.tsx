import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/PageTitle';
import { CategoryBooks } from '@/components/CategoryBooks';
import { CATEGORIES } from '@/constants';
import { resolveCategorySlug } from '@/utils';

type Props = {
    params: {
        slug: string;
    };
};
export default function CategoryPage({ params: { slug } }: Props) {
    const category = resolveCategorySlug(slug);

    if (typeof category === 'undefined') {
        notFound();
    }

    return (
        <>
            <PageTitle title={category.name} />
            <CategoryBooks category={category} />
        </>
    );
}

export function generateStaticParams() {
    const paths = CATEGORIES.map(({ slug }) => ({ slug }));
    return paths;
}
