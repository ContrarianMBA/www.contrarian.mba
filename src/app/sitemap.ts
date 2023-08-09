import { CATEGORIES, SITE_URL } from '@/constants';
import { MetadataRoute } from 'next';

const createPages = (urls: string[]) => {
    return urls.map((url) => ({
        url: `${SITE_URL}${url}`,
        lastModified: new Date(),
    }));
};

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = createPages(['', '/credits', '/jobs']);
    const allPages = [
        ...staticPages,
        ...createPages(CATEGORIES.map((category) => category.url)),
    ];

    return allPages;
}
