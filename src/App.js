import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListener } from "./utils/Firebase/firebaseConfig";
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // After auth state gets change this useEffect will call
        const unsubscribe = onAuthStateChangedListener((user) => {
            dispatch(setCurrentUser(user))
        })

        // When component unmounts then unsubscribe(returned by onAuthStateChangedListener)
        return unsubscribe;
    }, [])
    
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default App;