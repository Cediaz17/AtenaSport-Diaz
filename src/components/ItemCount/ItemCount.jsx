import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    function handleRestar ()
    {
        if(count>0)
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
        <div className=''>
            <div>
            <button onClick={() => handleRestar()}>-</button>
            <input value={count} />
            <button onClick={() => handleSumar()}>+</button>
            </div>
            <button onClick={() => onAdd()}>Agregar al Carrito </button>
        </div>
    );
}

export default  ItemCount;