import React, { useContext } from 'react';
import './CartWidget.css'
import carrito from '../img/carrito.png'
import { Link } from 'react-router-dom';
import CartContext from '../../store/Cart-Context';

function CartWidget () {
    const cartContx = useContext(CartContext);
    return (
        <div className='cart-box-carrito'>
            <Link to={`/cart`}>
                <img src={carrito} className="carrito" alt="carrito" />
                    {cartContx.getCartQuantity() > 0 ? 
                    <div className='cart-box-count'>
                        {cartContx.getCartQuantity()}
                    </div> :
            ''}
            </Link>
        </div>
    );
}

export default CartWidget ;