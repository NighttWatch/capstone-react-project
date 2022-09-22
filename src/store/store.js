import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger'
//logger: something allow us the see what the state look like before an action is dispatched, what the action is and then how the state in turn look after the action
//import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from "./root-saga";

import { rootReducer } from './root_reducer';




const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['cart'], //actual values you dont wanna persist
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(
    Boolean
); // if the return false, array will be empty. When the return true, actual object will return thanks to filter boolean.

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
//compose = it is essantially a way for use to pass multiple functions left to right. 


export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);