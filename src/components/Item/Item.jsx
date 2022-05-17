import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

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
            <button> <Link to = {`/item/${item.id}`}> Ver Detalle</Link></button>
        </div>
    )
}
export default Item