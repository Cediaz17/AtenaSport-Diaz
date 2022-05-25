import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { getAllItems, getItemById } from '../../services/firebase/firebase';



function getProductos (categoria)
{
    const snapshot = (categoria ? getItemById(categoria) :getAllItems());
    return snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}));
}


function ItemListContainer () 
{
    const [productos, setProductos] = useState([]);
    const {catalogoid} = useParams();

    useEffect(()=> {
        getProductos(catalogoid)
        .then(res =>{setProductos(res);
        });
    });

    return(
        <div className='background-ate'>
            <ItemList items={productos} />
        </div>
    )}
export default ItemListContainer