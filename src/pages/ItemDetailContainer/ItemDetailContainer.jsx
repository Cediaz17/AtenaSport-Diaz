import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

// Esta funcion recibe un id y genera una promesa
// la cual consta de filtrar una lista de objeto que coincida con el id
// que se pasa por parametro, se usa una promesa ya que la busqueda y muestra
// del producto lleva su tiempo, por ende en resumen las promesas se usan para aplicar
// el  asincronismo y poder trabajar con consultas, etc.
function getItem (id)
{
    const mypromise = new Promise ((resolve,rejet) =>{
        const listProductos =[
            {
                id:1,
                titulo : "Campera de Mujer",
                precio: 6000,
                stock:5,
                categoria: "Mujer",
                descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi, officia unde quibusdam distinctio debitis dolores quidem illum rem, natus quis tenetur maiores possimus, at quasi non impedit. Quasi, unde.',
                rutaImg: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/589562/01/mod01/fnd/ARG/fmt/png'
            },
            {
                id:2,
                titulo : "Campera de Hombre",
                precio: 6500,
                stock:5,
                categoria: "Hombre",
                descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi, officia unde quibusdam distinctio debitis dolores quidem illum rem, natus quis tenetur maiores possimus, at quasi non impedit. Quasi, unde.',
                rutaImg : 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f0b309fbde34a208490ada800c63859_9366/campera-own-the-run.jpg'
            },
            {
                id:3,
                titulo : "Top Mujer",
                precio: 4000,
                stock:5,
                categoria: "Mujer",
                descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi, officia unde quibusdam distinctio debitis dolores quidem illum rem, natus quis tenetur maiores possimus, at quasi non impedit. Quasi, unde.',
                rutaImg :'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e30f4d56f8c04dcdb2cbad1400472a37_9366/top-deportivo-de-entrenamiento-all-me-sujecion-suave.jpg'
            },
            {
                id:4,
                titulo : "Remera Hombre",
                precio: 4500,
                stock:5,
                categoria: "Hombre",
                descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi, officia unde quibusdam distinctio debitis dolores quidem illum rem, natus quis tenetur maiores possimus, at quasi non impedit. Quasi, unde.',
                rutaImg :'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e86d91613e7143358238ad1e00625c38_9366/remera-aeroready-designed-to-move-sport-motion-logo.jpg'
            },
        ];
        const producto = listProductos.filter(producto => producto.id === parseInt(id));
        setTimeout(()=>{resolve(producto[0])},2000);
    });
    return mypromise
}

// Esta funcion debe mostrar el detalle de un producto
// crea un producto tipo objeto que arranca vacio.
// crea un id que será un parametro por eso es un UseParams.
// como debemos indicarle a react que una vez renderizado debe mostrar el detalle usamos 
// useEffct donde la accion a efectuar es la llamada al getItem y actualizar el valor de
// producto creado con anterioridad.
// este retorna un bloque a mostrar donde se invoca al detalle del producto.


function ItemDetailContainer ()
{
    const [producto, setProducto] = useState ({});
    const {id} = useParams();

    useEffect (()=>{
        getItem(id).then(res => {setProducto(res);})
    }, [id]);
    
    return (
        
        <div className='detalle-grop'>
            <ItemDetail item= {producto} />
        </div>
    )
}

export default ItemDetailContainer;