import React from 'react';
//import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

// function ItemListContainer (props) {
//     function agregarCarrito()
//     {
//         console.log("Agregaste al carrito");
//     }
//     return ( 
//         <div className="fondo">
//             <ItemCount initial={0} stock={6} onAdd={agregarCarrito}/>
//         </div>
//     );
// }

function getProductos ()
{
    const mypromise = new Promise((resolve, rejeact)=>{
        const listProductos =[
            {
                id:1,
                titulo : "Campera de Mujer",
                precio: 3000,
                rutaImg : ""
            },
            {
                id:2,
                titulo : "Campera de Hombre",
                precio: 3500,
                rutaImg : ""
            },
            {
                id:3,
                titulo : "Top Mujer",
                precio: 3500,
                rutaImg : ""
            },
        ];
        setTimeout(()=>{resolve(listProductos);
        }, 2000);
    });
    return mypromise;
}

const []
export default ItemListContainer;