import Button from '../button/button.compenent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../card-item/cart-item.compenet';

import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);


    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }


    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />    
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
                <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown;