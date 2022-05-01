import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail ({item})
{
    return (
        <div className='box-detalle-g'>
            <div className='imagen-detalle'>
                <img src={item.rutaImg} alt="Img producto" />
            </div>
            <div className='box-detalle-m'>
                <div className='box-titulo'>{item.titulo}</div>
                <div className='box-precio'>${item.precio}</div>
                <ItemCount initial={0} stock={item.stock} onAdd={()=>{}}/>
                <div className='box-descripcion'>{item.descripcion}</div>
            </div>
        </div>
    )
}


export default ItemDetail