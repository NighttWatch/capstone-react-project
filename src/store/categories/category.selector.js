import { createSelector } from "reselect";//memorize of recurring input


const selectCategoryReducer = (state) => state.categories;


export const selectCategories = createSelector(
    [selectCategoryReducer], //input selector
    (categoriesSlice) => categoriesSlice.categories // output selector
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category; 
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);