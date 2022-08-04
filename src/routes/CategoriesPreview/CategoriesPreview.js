import { useContext, Fragment } from "react"

import { CategoriesContext } from "../../context/CategoriesContext"
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview"

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        // Iterating over object
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </Fragment>

    )
}

export default CategoriesPreview;