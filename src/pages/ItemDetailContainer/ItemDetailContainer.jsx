import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getItemById } from '../../services/firebase/firebase';

function getItem (id)
{
    const snapshot = getItemById(id);
    return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
}


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