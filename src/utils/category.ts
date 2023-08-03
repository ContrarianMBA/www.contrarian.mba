export function buildCategoryUrl(category: string): string {
    const value = category.replace(' ', '_');
    return `/categories/${value}`;
}

export function getCategoryFromURLParam(urlParam: string): string {
    const category = urlParam.replace('_', ' ');
    return category;
}
