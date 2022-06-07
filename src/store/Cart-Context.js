import React, { createContext, useState} from 'react';

const CartContext = createContext (
    {
        products:[],
        addProduct: () => {},
        removeProduct:() =>{},
        clear: () => {},
        isInCart:() =>{},
        getCartQuantity:() =>{},
        getTotalPrice: () => {}
    }
);

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const removeProduct = (id) => {
        const idEliminar = productList.findIndex(item => item.id === id);
        console.log(idEliminar);
        console.log(productList[idEliminar]);
        console.log(productList[idEliminar].cant);
        if(productList[idEliminar].cant === 1){
            setProductList(productList.filter(valor => valor.id !== id))
        } else {
            setProductList(productList.map(val => val.id === id ? {...val, cant : val.cant -1} : val));
        }
    }

    const addProduct = (producto) => {
        console.log('LISTA = ', productList)
        console.log('PRODUCTO', producto)
        const idproducto = productList.findIndex(item => item.id === producto.id )
        if(idproducto !== -1) {
            setProductList(productList.map( valor => valor.id === producto.id ? {...valor, cant : valor.cant + producto.cant} : valor));
        } else {
            setProductList([producto, ...productList]);
        }
    }

    const isInCart = (id) => {
        return productList.map(valor => valor.id).indexOf(id) !== -1;
    }
    const clear = () => {
        setProductList([]);
    }
    const getCartQuantity = () => {
        return productList.reduce((total, valor) => {
            return total + valor.cant
        }, 0)
    }
    const getTotalPrice = () => 
    {
        return productList.reduce((total, valor) => {
            return total + valor.cant * valor.precio
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products : productList,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            getTotalPrice
        }} >    
        {children}
        </CartContext.Provider> 
    )
}

export default CartContext;