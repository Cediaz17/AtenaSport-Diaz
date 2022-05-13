import React, { createContext, useState} from 'react';

const CartContext = createContext (
    {
        productos:[],
        agregarProducto: () => {},
        eliminarProducto:() =>{},
        limpiar: () => {},
        estaEn:() =>{},
        obtenerTotal:() =>{}
    }
);

export const CartContextProvider = ({ children }) => {
    const [listadoPro, setListadoPro] = useState([]);

    const eliminarProducto = (id) => {
        const idEliminar = listadoPro.findIndex(item => item.id === id);
        if(listadoPro[idEliminar].cantidad === 1){
            setListadoPro(listadoPro.filter(valor => valor.id !== id))
        } else {
            setListadoPro(listadoPro.map(val => val.id === id ? {...val, cantidad : val.cantidad -1} : val));
        }
    }

    const agregarProducto = (producto) => {
        const idproducto = listadoPro.findIndex(item => item.id === producto.id )
        if(idproducto !== -1) {
            setListadoPro(listadoPro.map( valor => valor.id === producto.id ? {...valor, cantidad : valor.cantidad + producto.cantidad} : valor));
        } else {
            setListadoPro([producto, ...listadoPro]);
        }
    }

    const estaEn = (id) => {
        return listadoPro.map(valor => valor.id).indexOf(id) !== -1;
    }
    const limpiar = () => {
        setListadoPro([]);
    }
    const obtenerTotal = () => {
        return listadoPro.reduce((total, valor) =>{
            return total + valor.cantidad
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            productos : listadoPro,
            agregarProducto,
            eliminarProducto,
            limpiar,
            estaEn,
            obtenerTotal
        }} >    {children}</CartContext.Provider> 
    )
}

export default CartContext;