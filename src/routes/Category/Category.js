import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'

import { CategoryContainer, CategoryTitle } from './Category.styles'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
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
            <CategoryContainer>
                {
                    products && products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category