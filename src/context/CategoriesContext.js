import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/Firebase/firebaseConfig.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
})


export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // async function inside useEffect()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap();
    }, [])

    const value = { categoriesMap }

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}