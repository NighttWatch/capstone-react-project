import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
//import logger  from "redux-logger";
//logger: something allow us the see what the state look like before an action is dispatched, what the action is and then how the state in turn look after the action

import { rootReducer } from './root_reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState());

    next(action);


    console.log('next state: ', store.getState());
}

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares))
//compose = it is essantially a way for use to pass multiple functions left to right. 

export const store = createStore(rootReducer, undefined, composedEnhancers)