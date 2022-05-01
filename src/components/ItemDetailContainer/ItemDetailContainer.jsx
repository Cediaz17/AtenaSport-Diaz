import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem ()
{
    const mypromise = new Promise ((resolve,rejet) =>{
        const producto = {
            id:1,
            titulo : "Campera Puma Hit Feel It",
            precio: 4500,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla rem eius magni sit eveniet quod voluptas dolor ducimus, error consectetur consequuntur odit, quam quae unde ipsum similique! Velit, totam?",
            stock:5,
            rutaImg : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/589562/01/mod01/fnd/ARG/fmt/png'
        }; 
        setTimeout(()=>{resolve(producto)},2000);
    });
    return mypromise
}

function ItemDetailContainer ()
{
    const [producto, setProducto] = useState ({});

    useEffect (()=>{
        getItem().then(res => {setProducto(res);})
    }, {});
    
    return (
        <div className='detalle-grop'>
            <ItemDetail item= {producto} />
        </div>
    )
}

export default ItemDetailContainer;