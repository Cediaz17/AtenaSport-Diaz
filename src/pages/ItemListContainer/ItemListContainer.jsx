import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';



function getProductos (categoria)
{
    const mypromise = new Promise((resolve, reject)=>{
        const listProductos =[
            {
                id:1,
                titulo : "Campera de Mujer",
                precio: 6000,
                categoria:'Mujer',
                rutaImg : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/589562/01/mod01/fnd/ARG/fmt/png'
            },
            {
                id:2,
                titulo : "Campera de Hombre",
                categoria:'Hombre',
                precio: 6500,
                rutaImg : 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f0b309fbde34a208490ada800c63859_9366/campera-own-the-run.jpg'
            },
            {
                id:3,
                titulo : "Top Mujer",
                categoria:'Mujer',
                precio: 4000,
                rutaImg :'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e30f4d56f8c04dcdb2cbad1400472a37_9366/top-deportivo-de-entrenamiento-all-me-sujecion-suave.jpg'
            },
            {
                id:4,
                titulo : "Remera Hombre",
                categoria:'Hombre',
                precio: 4500,
                rutaImg :'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e86d91613e7143358238ad1e00625c38_9366/remera-aeroready-designed-to-move-sport-motion-logo.jpg'
            },
        ];
        const resultadoFiltro = categoria ? listProductos.filter(produ => produ.categoria === categoria) : listProductos;
        setTimeout(()=>{resolve(resultadoFiltro);
        }, 2000);
    });
    return mypromise;
}


function ItemListContainer () 
{
    const [productos, setProductos] = useState([]);
    const {catalogoid} = useParams();

    useEffect(()=> {
        getProductos(catalogoid).then(res => { setProductos(res);})
    }, [catalogoid]);

    return(
        <div className='background-ate'>
            <ItemList items={productos} />
        </div>
    )}
export default ItemListContainer