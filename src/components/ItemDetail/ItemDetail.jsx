import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail ({item})
{   
    const [countProductos, setCountProductos] = useState(null);
    function addHandler(cantidad)
    {
        setCountProductos(cantidad);
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
                    { 
                        countProductos ? 
                        <button> <Link to='/cart'> Finalizar Compra ({ countProductos })</Link></button> :
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler}/>
                    }
                </div>}
                <div className='box-descripcion'>{item.descripcion}</div>
            </div>
        </div>
    )
}


export default ItemDetail