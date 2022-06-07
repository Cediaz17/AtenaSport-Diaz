import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item ({item})
{
    return (
        <div className='box'>
            <Link to = {`/item/${item.id}`}>
                <div  className='imagen-Producto'>
                    <img src={item.rutaImg} alt="Img producto" />
                </div>
                <div className='box-titulo'>{item.titulo}</div>
                <div className='box-precio'>
                    $ {item.precio}
                </div>
            </Link>    
        </div>
    )
}
export default Item