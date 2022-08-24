import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'

import { CategoryContainer, CategoryTitle } from './Category.styles'

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>
                        {
                            products && products.map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                )
                            })
                        }
                    </CategoryContainer>
                )
            }
        </Fragment>
    )
}

export default Category