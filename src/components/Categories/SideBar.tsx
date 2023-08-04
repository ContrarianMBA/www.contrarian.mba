import data from '@data/contrarianmba.json';
import { buildCategoryUrl } from '@/utils';
import Link from 'next/link';

export function CategoriesSideBar() {
    return (
        <ul className="list-group list-group-flush">
            {data.categories.map((category) => (
                <li key={category} className="list-group-item">
                    <Link
                        href={buildCategoryUrl(category)}
                        className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                        {category}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
