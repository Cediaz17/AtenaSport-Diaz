import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getItemById } from '../../services/firebase/firebase';
import Spinner from '../../components/spinner/spinner';

const getItem = async (itemId) => {
    const snapshot = await getItemById(itemId);
    return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
}


function ItemDetailContainer ()
{
    const [producto, setProducto] = useState ({});
    const {id} = useParams();
    const [load, setLoad] = useState(true);
        
    useEffect (()=>{  
        setLoad(true);       
        getItem(id)
        .then(res => {setProducto(res);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoad(false);
        });
    }, [id]);
    
    return (
        <div className='detalle-grop'>
            {
                load ? <Spinner/> :
                <ItemDetail item= {producto} />
            }
        </div>
    )
}

export default ItemDetailContainer;