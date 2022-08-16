// convert our categories array that we store inside of Redux into the categoriesMap(Object) 
// that we use in order to access our categories quickly and efficiently in Category and
// CategoriesPreview component

export const selectCategoriesMap = (state) => {
    return state.categories.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
}