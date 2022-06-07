import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    function handleRestar ()
    {
        if(count>1)
        {
            setCount(count -1)
        }
    }
    function handleSumar ()
    {
        if(count < stock)
        {
            setCount(count+1)
        }
    }
    return ( 
        <div className='box-contador'>
            <div className='bloque'>
                <div className='botones-contador-valor'>
                    <button onClick={() => handleRestar()}>-</button>
                </div>
                <div>
                    <input readOnly value={count} />
                </div>
                <div className='botones-contador-valor'>
                    <button onClick={() => handleSumar()}>+</button>
                </div>
            </div>
            <button className='botonGenerico' onClick={() => onAdd(count)}>Agregar al Carrito </button>
        </div>
    );
}

export default  ItemCount;