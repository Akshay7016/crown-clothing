import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import { checkUserSession } from './store/user/user.action';

import { GlobalStyles } from './global.styles'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession())
    }, [])

    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='shop/*' element={<Shop />} />
                    <Route path='auth' element={<Authentication />} />
                    <Route path='checkout' element={<Checkout />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;