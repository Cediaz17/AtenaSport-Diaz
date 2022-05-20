import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';



function getProductos (categoria)
{
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    if(categoria) {
        const q = query(itemsCollection, where('categoria', '==', categoria));
        return getDocs(q)
                .then((snapshot) => { 
                    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                });
    } else {
        return getDocs(itemsCollection)
                .then((snapshot) => { 
                    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                });  
    }  
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