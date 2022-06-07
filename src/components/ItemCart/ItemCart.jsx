import React, { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import './ItemCart.css'

const ItemCart = ({item}) =>{
    const cartContx = useContext(CartContext);
    return (
        <div className='item-cart'>
            <section className='item-cart-seccion'>
                <div className='item-cart-foto' >
                    <img src={item.rutaImg} alt="Img producto" />
                </div>
                <div className='item-cart-titulo' >
                    {item.titulo}
                </div>
            </section>
            <div className='item-cart-cantidad'>
                <p>
                    Unidades: {item.cant}
                </p>
            </div>
            <div className='item-cart-precio'>
                <p>
                    Subtotal: {item.precio}
                </p>
            </div>
            <section className='item-cart-botonEliminar'>
                <div className='button-eliminar'>
                <button onClick={() => cartContx.removeProduct(item.id)} >Eliminar Producto</button>
                </div>
            </section>
        </div>
    )
};

export default ItemCart;