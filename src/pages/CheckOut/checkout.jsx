import { async } from '@firebase/util';
import { createOrder, getItemById, updateItem } from '../../services/firebase/firebase';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/Cart-Context';
const CheckOut = () =>{
    const [orderID, setOrderID] = useState()
    const [load, setLoad] = useState(false)
    const {cartContx, getCartQuantity} = useContext(CartContext);

    const [buyer , setBuyer]= useState({Nombre:'', Telefono:'',Email:''});
    const {Nombre, Telefono, Email} = buyer
    const handleInputChange = (e) =>
    {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
    }
    const generateOrder = async(data) => {
        setLoad(true);
        const { id } = await createOrder(data);
        setOrderID(id);
        setLoad(false);
    };

    const updateStock = (products) => {
        for(const product of products) {
            const item = getItemById(product.id);
            updateItem(item.id, { stock: item.data().stock - product.quantity});
        }
    };
    const handleSubmit = (e) =>
    {
        e.preventDefaul()
        const dia = new Date() 
        const items = cartContx.map(e => { return{id:e.id, title:e.titulo, price: e.precio,amount:e.amount}})
        const total = getCartQuantity()
        const data = {buyer,items, total, dia}
        generateOrder(data);
        updateStock(cartContx.products);
        cartContx.clear();
    };  
    return (
        load ? "spining" :
        <div>
            <h2>Finalizando Compra</h2>
            <hr />
            {
                orderID ? "Tenes un id de orden" 
                        : cartContx.products.length === 0 ? "El carrito esta vacio"
                        : <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="Nombre" id="name" value={Nombre} placeholder='Nombre' onChange={handleInputChange} />
                            <input type="number" name="Telefono" id="phone" value={Telefono} placeholder='Telefono' onChange={handleInputChange} />
                            <input type="email" name="Email" id="email" value={Email} placeholder='Correo Electronico' onChange={handleInputChange} />
                            <input type="submit" value="Finalizar Compra" />
                        </form>
                    </div>
                        
            }
        </div>
    )
}

export default CheckOut;