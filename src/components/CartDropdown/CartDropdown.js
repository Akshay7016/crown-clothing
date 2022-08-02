import { useContext } from 'react'

import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

import './CartDropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

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
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown