export function buildCategoryUrl(category: string): string {
    const value = category.replace(/ /g, '-');
    return `/categories/${value}`;
}

export function getCategoryFromURLParam(urlParam: string): string {
    const category = urlParam.replace(/-/g, ' ');
    return category;
}
