import { CATEGORIES, SITE_URL } from '@/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPaths = ['', 'credits', 'jobs'];

    const dynamicPaths = [
        ...CATEGORIES.map((category) => {
            return category.path;
        }),
    ];

    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = [
        ...allPaths.map((path) => ({
            url: `${SITE_URL}/${path}`,
            lastModified: new Date(),
        })),
    ];

    return sitemap;
}
