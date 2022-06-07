import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { getAllItems, getAllItemsByCategoryId } from '../../services/firebase/firebase';
import Spinner from '../../components/spinner/spinner';

const getProductos = async (catalogoid) => {
    const snapshot = await (catalogoid ? getAllItemsByCategoryId(catalogoid) : getAllItems());
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
}


function ItemListContainer () 
{
    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true);
    const {catalogoid} = useParams();

    useEffect(()=> {
        setLoad(true);
        getProductos(catalogoid)
        .then(res =>{setProductos(res);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoad(false);
        });
    },[ catalogoid ]);

    return(
        <div className='background-ate'>
            {
                load ? <Spinner></Spinner> :
                <>  
                    <h1 className='item-list-titulo'>{catalogoid ? catalogoid.charAt(0).toUpperCase() + catalogoid.slice(1) : 'Catálogo'}</h1>
                    <ItemList items={productos} />
                    
                </>
            }
        </div>
    )}
export default ItemListContainer