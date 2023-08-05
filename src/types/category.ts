import { CategoryType } from '@data/contrarianmba.json';

export class Category {
    name: string;
    slug: string;
    url: string;

    constructor(categoryName: CategoryType) {
        this.name = categoryName;
        this.slug = categoryName.toLowerCase().replace(/ /g, '-');
        this.url = `/categories/${this.slug}`;
    }
}
