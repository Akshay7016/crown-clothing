import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector'

import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles'

const CartDropdown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)
    const isCartOpen = useSelector(selectIsCartOpen)

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
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