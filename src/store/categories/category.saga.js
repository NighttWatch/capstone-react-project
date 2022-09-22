import { takeLatest, all, call, put, take } from "redux-saga/effects"

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./category.action";

import { CATEGORIES_ACTION_TYPE } from "./category.type";


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories'); // to use the function in generator us the call. First is function, second place is for parameters
        yield put(fetchCategoriesSuccess(categoriesArray)) // put replaced with dispatch
    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync) // if you have bunch of same action, give the latest one.
}


export function* categoriesSaga() {
    yield all([call(onFetchCategories)]) // run everything inside, all complete before continue - redux-saga binding redux store.js

}