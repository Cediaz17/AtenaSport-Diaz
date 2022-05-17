import React, { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import './ItemCart.css'

const ItemCart = ({item}) =>{
    const cartContx = useContext(CartContext);
    return (
        <div className='item-cart'>
            <div>
                {item.titulo}
            </div>
            <div>
                {item.precio}
            </div>
            <div>
                {item.cant}
            </div>
            <div className='button-eliminar'>
            <button onClick={() => cartContx.removeProduct(item.id)} >Eliminar Producto</button>
            </div>
        </div>
    )
};

export default ItemCart;