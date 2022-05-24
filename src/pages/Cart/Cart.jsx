import React, { useContext } from 'react';
import ItemCart from '../../components/ItemCart/ItemCart';
import CartContext from '../../store/Cart-Context';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart ()
{
    const cartContx = useContext(CartContext);
    console.log(cartContx);
    return (
        <div>
            {cartContx.getCartQuantity() === 0 ?
                <div>
                    <h2>No hay productos en tu carrito</h2>
                    <button><Link to={`/`}>Ver Catalogo</Link> </button>    
                </div>:
                <div className='cart-box'>
                    {cartContx.products.map(producto => <ItemCart key={producto.id} item={producto}/>)}
                    {`Precio total: ${cartContx.getTotalPrice()}`}
                    <Link to={'/checkout'}>
                    <button>Finalizar Compra</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Cart;