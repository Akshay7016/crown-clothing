import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'

import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles'

const CartDropdown = () => {
    const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        setIsCartOpen(!isCartOpen);
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((cartItem) => {
                            return (
                                <CartItem key={cartItem.id} cartItem={cartItem} />
                            )
                        })
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )

                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown