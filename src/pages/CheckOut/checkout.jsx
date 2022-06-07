import { createOrder, getItemById, updateItem } from '../../services/firebase/firebase';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/Cart-Context';
import Spinner from '../../components/spinner/spinner';
const CheckOut = () =>{
    const [orderID, setOrderID] = useState()
    const [load, setLoad] = useState(false)
    const cartContx = useContext(CartContext);
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

    const updateStock = async (products) => {
        for(const producto of products) {
            const item = await getItemById(producto.id);
            console.log(item);
            updateItem(item.id, { stock: item.data().stock - producto.cant});
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        console.log(cartContx.products);
        const order = {
            buyer: { Nombre: buyer.Nombre, Telefono: buyer.Telefono, Email: buyer.Email },
            items: cartContx.products.map(producto => ({id: producto.id, titulo: producto.titulo, precio: producto.precio, cantidad: producto.cant})),
            date: new Date(),
            total: cartContx.getTotalPrice()
        }
        generateOrder(order);
        console.log(cartContx.products);
        updateStock(cartContx.products);
        cartContx.clear();
    };
    return (
            <div className='fondo'>
            {
                orderID ?   <div> <h3>Felicitaciones tu compra se realizo correctamente.</h3> 
                                <p> Dentro de las 72hs llegara tu pedido: {orderID} </p> 
                            </div> 
                        :   cartContx.products.length === 0 ?   <div> <h3>Tu carrito está vacío.</h3> 
                                                                    <p> Te invitamos a que conozcas nuestros productos </p> 
                                                                </div>
                        :
                <div>
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