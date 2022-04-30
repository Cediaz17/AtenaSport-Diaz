import React, { useEffect, useState } from 'react';
//import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function getProductos ()
{
    const mypromise = new Promise((resolve, rejeact)=>{
        const listProductos =[
            {
                id:1,
                titulo : "Campera de Mujer",
                precio: 3000,
                rutaImg : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/589562/01/mod01/fnd/ARG/fmt/png'
            },
            {
                id:2,
                titulo : "Campera de Hombre",
                precio: 3500,
                rutaImg : 'https://images.puma.com/image/upload/f_auto,q_auto…_480,h_480/global/530094/01/mod01/fnd/ARG/fmt/png'
            },
            {
                id:3,
                titulo : "Top Mujer",
                precio: 3500,
                rutaImg : '	https://images.puma.com/image/upload/f_auto,q_auto…_480,h_480/global/520951/33/mod01/fnd/ARG/fmt/png'
            },
        ];
        setTimeout(()=>{resolve(listProductos);
        }, 2000);
    });
    return mypromise;
}


function ItemListContainer ({greeting}) {
//     function agregarCarrito()
//     {
//         console.log("Agregaste al carrito");
//     }
//     return ( 
//         <div className="fondo">
//             <ItemCount initial={0} stock={6} onAdd={agregarCarrito}/>
//         </div>
//     );

const [productos, setProductos] = useState([]);

useEffect(()=> {
    getProductos().then(res => { setProductos(res);})
}, []);

return(
    <div className='fondo'>
        <ItemList items={productos} />
        {
            
        }
    </div>
)}
export default ItemListContainer