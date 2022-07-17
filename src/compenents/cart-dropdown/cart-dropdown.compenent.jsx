import Button from '../button/button.compenent';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import CartItem from '../card-item/cart-item.compenet';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />    
                ))}
            </div>
                <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropDown;