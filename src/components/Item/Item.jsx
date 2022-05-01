import React from 'react';
import './Item.css';

function Item ({item})
{
    return (
        <div className='box'>
            <div  className='imagen-Producto'>
                <img src={item.rutaImg} alt="Img producto" />
            </div>
            <div className='box-titulo'>{item.titulo}</div>
            <div className='box-precio'>
                {item.precio}
            </div>
        </div>
    )
}
export default Item