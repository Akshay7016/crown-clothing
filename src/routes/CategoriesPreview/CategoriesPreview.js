import { Fragment } from "react"
import { useSelector } from 'react-redux';

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview"
import Spinner from "../../components/Spinner/Spinner";

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        // Iterating over object
        <Fragment>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        )
                    })
                )
            }
        </Fragment>

    )
}

export default CategoriesPreview;