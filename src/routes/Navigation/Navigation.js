import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../context/UserContext';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/Firebase/firebaseConfig';

import './Navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrownLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;