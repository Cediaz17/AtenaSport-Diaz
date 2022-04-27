import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer (props) {
    function agregarCarrito()
    {
        console.log("Agregaste al carrito");
    }
    return ( 
        <div className="fondo">
            <ItemCount initial={0} stock={6} onAdd={agregarCarrito}/>
        </div>
    );
}

export default ItemListContainer;