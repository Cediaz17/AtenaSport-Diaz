import React from 'react';
import './CartWidget.css'
import carrito from '../img/carrito.png'

function CartWidget (props) {
    return ( 
        <img src={carrito} className="carrito" alt="carrito" />
    );
}

export default CartWidget ;