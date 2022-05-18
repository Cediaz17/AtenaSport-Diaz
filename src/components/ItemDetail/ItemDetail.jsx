import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../store/Cart-Context';
import './ItemDetail.css';

function ItemDetail ({item})
{   
    const cartContx = useContext(CartContext);
    function addHandler(cantidad)
    {
        cartContx.addProduct({cant:cantidad, ...item});
    }
    return ( 
        <div className='box-detalle-g'>
            <div className='imagen-detalle'>
                <img src={item.rutaImg} alt="Img producto" />
            </div>
            <div className='box-detalle-m'>
                <div className='box-titulo'> <h1>{item.titulo}</h1></div>
                <div className='box-precio'>${item.precio}</div>
                {<div>
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                        {/* <button onClick={() => console.log(cartContx.products)} >Mostrar carrito</button>
                        <button onClick={() => cartContx.clear()} >Limpiar Carrito</button>
                        <button onClick={() => console.log(cartContx.isInCart(item.id))} >Esta en el carrito</button>
                        <button onClick={() => console.log(cartContx.getCartQuantity())} >Cantidad</button> */}
                    { 
                        cartContx.products.length === 0? '':
                        <button onClick={() => console.log(cartContx)}>
                            <Link to='/cart'>
                                Finalizar compra ({cartContx.getCartQuantity()})
                            </Link>
                        </button>
                        //countproducts ? 
                        //<button> <Link to='/cart'> Finalizar Compra ({ countProductos })</Link></button> :
                        //<ItemCount initial={0} stock={item.stock} onAdd={addHandler}/>
                    }
                </div>}
                <div className='box-descripcion'>{item.descripcion}</div>
            </div>
        </div>
    )
}


export default ItemDetail