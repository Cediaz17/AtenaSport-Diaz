import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

// Esta funcion recibe un id y genera una promesa
// la cual consta de filtrar una lista de objeto que coincida con el id
// que se pasa por parametro, se usa una promesa ya que la busqueda y muestra
// del producto lleva su tiempo, por ende en resumen las promesas se usan para aplicar
// el  asincronismo y poder trabajar con consultas, etc.
function getItem (id)
{
    const db =getFirestore();
    const itemF = doc(db, 'items', id);

    return getDoc(itemF)
            .then((snapshot) => { 
                return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
            });
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