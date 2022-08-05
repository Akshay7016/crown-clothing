import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'

import './CartDropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )
                    })
                }
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown