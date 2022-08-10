import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import { onAuthStateChangedListener } from "../utils/Firebase/firebaseConfig";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    console.log("Dispatched");
    console.log(payload);

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        // After auth state gets change this useEffect will call
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
        })

        // When component unmounts then unsubscribe(returned by onAuthStateChangedListener)
        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}