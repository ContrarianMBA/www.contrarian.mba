import { CategoryType } from '@data/contrarianmba.json';

export class Category {
    name: string;
    slug: string;

    constructor(categoryName: CategoryType) {
        this.name = categoryName;
        this.slug = categoryName.toLowerCase().replace(/ /g, '-');
    }

    get path(): string {
        return `categories/${this.slug}`;
    }

    get url(): string {
        return `/${this.path}`;
    }
}
