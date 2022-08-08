import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/Firebase/firebaseConfig';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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