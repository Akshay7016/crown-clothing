import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { fetchCategoriesStart } from '../../store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()

    // redux-saga used for asynchronous actions
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop