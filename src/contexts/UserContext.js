import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/Firebase/firebaseConfig";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
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