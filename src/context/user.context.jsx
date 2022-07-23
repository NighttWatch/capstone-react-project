import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null, // blank function syntax

});


export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log(action);
    console.log('dispatched');
    const { type, payload } = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        case 'increment':
            return {
                value: state.value +1,
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, {payload: user }))
    }   
    
    
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscripbe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }  
            setCurrentUser(user);          
        });

        return unsubscripbe
    },[]);

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}