import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../store/Cart-Context';
import './ItemDetail.css';

function ItemDetail ({item})
{   
    const cartContx = useContext(CartContext);
    function addHandler(cantidad)
    {
        cartContx.agregarProducto({cant:cantidad, ...item});
    }
    return (
        <div className='box-detalle-g'>
            <div className='imagen-detalle'>
                <img src={item.rutaImg} alt="Img producto" />
            </div>
            <div className='box-detalle-m'>
                <div className='box-titulo'>{item.titulo}</div>
                <div className='box-precio'>${item.precio}</div>
                {<div>
                    <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        <button onClick={() => console.log(cartContx.productos)} >Mostrar carrito</button>
                        <button onClick={() => cartContx.eliminarProducto(item.id)} >Eliminar Producto</button>
                        <button onClick={() => cartContx.limpiar()} >Limpiar Carrito</button>
                        <button onClick={() => console.log(cartContx.estaEn(item.id))} >Esta en el carrito</button>
                        <button onClick={() => console.log(cartContx.obtenerTotal())} >Cantidad</button>
                    { 
                        cartContx.productos.length &&
                        <button onClick={() => console.log(cartContx)}>
                            <Link to='/cart'>
                                Finalizar compra ({cartContx.obtenerTotal()})
                            </Link>
                        </button>
                        //countProductos ? 
                        //<button> <Link to='/cart'> Finalizar Compra ({ countProductos })</Link></button> :
                        //<ItemCount initial={0} stock={item.stock} onAdd={addHandler}/>
                    }
                </div>}
                <div className='box-descripcion'>{item.descripcion}</div>
            </div>
        </div>
    )
}


export default ItemDetail