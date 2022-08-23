import { createSelector } from "reselect";

// to get categories reducer value
const selectCategoryReducer = (state) => state.categories;

// Check whether categories reducer value changed or not
const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

// Check whether categories value changed or not
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

)

// convert our categories array that we store inside of Redux into the categoriesMap(Object)
// that we use in order to access our categories quickly and efficiently in Category and
// CategoriesPreview component

// Memoized => Memorization is the process in which you cache the previous value of something
// so that if the input has not changed, then you just return back the same output.
