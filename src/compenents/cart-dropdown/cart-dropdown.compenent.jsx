import Button from '../button/button.compenent';
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CartItem from '../card-item/cart-item.compenet';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);



    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />    
                ))}
            </div>
                <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropDown;