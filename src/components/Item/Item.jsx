import React from 'react';
import './Item.css';

function Item ({item})
{
    return (
        <div className='box'>
            <div>{item.titulo}</div>
            <div>
                <img className='imagen-Producto' src={item.rutaImg} alt="Img producto" />
            </div>
            <div>
                {item.precio}
            </div>
        </div>
    )
}
export default Item;