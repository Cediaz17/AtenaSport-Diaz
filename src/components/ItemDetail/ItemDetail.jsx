import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../store/Cart-Context';
import './ItemDetail.css';

function ItemDetail ({item})
{   
    const cartContx = useContext(CartContext);
    function addHandler(cantidad)
    {
        cartContx.addProduct({cant: cantidad, ...item});
    }
    return ( 
        <div className='box-detalle-g'>
            <div className='imagen-detalle'>
                <img src={item.rutaImg} alt="Img producto" />
            </div>
            <div className='box-detalle-m'>
                <div className='box-titulo-d'> <h1>{item.titulo}</h1></div>
                {<div className='box-contador-g'>
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                </div>}
                <div className='box-precio-d'>$ {item.precio}</div>
                <div className='box-descripcion'>{item.descripcion}</div>
            </div>
        </div>
    )
}


export default ItemDetail