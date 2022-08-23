import { Fragment } from 'react';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/Firebase/firebaseConfig';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector'

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './Navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo />
                </LogoContainer>

                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>

                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }

                    <CartIcon />
                </NavLinks>

                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;