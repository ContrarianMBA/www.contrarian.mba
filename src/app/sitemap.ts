import { CATEGORIES, SITE_URL, FOOTER_LINK_PATHS } from '@/constants';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPaths = [
        '', // home page
        ...FOOTER_LINK_PATHS,
    ];

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
