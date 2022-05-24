import { async } from '@firebase/util';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/Cart-Context';
const CheckOut = () =>{
    const [buyer , setBuyer]= useState({Nombre:'', Telefono:'',Email:''});
    const {cartContx, getCartQuantity} = useContext(CartContext);
    const {Nombre, Telefono, Email} = buyer
    const handleInputChange = (e) =>
    {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
    }
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    const db = getFirestore();
    const generateOrder = async(data) => {
        try {
            const coll = collection(db, "Orders")
            const order = await addDoc(coll,data)
            console.log(data)
        }catch (error) {
            console.log(error)
        }
    } 
    const handleSubmit = (e) =>
    {
        e.preventDefaul()
        const dia = new Date() 
        const items = cartContx.map(e => { return{id:e.id, title:e.titulo, price: e.precio,amount:e.amount}})
        const total = getCartQuantity()
        const data = {buyer,items, total, dia}
        generateOrder(data)
    }   
    return (
        <div>
            <h2>Para finalizar la compra primero debes completar unos datos</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" name="Nombre" id="name" value={Nombre} placeholder='Nombre' onChange={handleInputChange} />
                <input type="number" name="Telefono" id="phone" value={Telefono} placeholder='Telefono' onChange={handleInputChange} />
                <input type="email" name="Email" id="email" value={Email} placeholder='Correo Electronico' onChange={handleInputChange} />
                <input type="submit" value="Finalizar Compra" />
            </form>
        </div>
    )
}

export default CheckOut;