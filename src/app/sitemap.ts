import { CATEGORIES, SITE_URL } from '@/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return CATEGORIES.map((category) => ({
        url: `${SITE_URL}${category.url}`,
        lastModified: new Date(),
    }));
}
