import { useContext } from 'react';

import './product-card.styles.scss';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.compenent';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const { name, price, imageUrl } = product;

    console.log(name)

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={ imageUrl } alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add to card</Button>
        </div>
    );
};

export default ProductCard;