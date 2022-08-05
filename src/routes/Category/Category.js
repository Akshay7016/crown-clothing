import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'

import './Category.scss'

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
            <h2 className='category-title'>{category}</h2>
            <div className='category-container'>
                {
                    products && products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Category