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
        <div className='cart'>
            {cartContx.getCartQuantity() === 0 ?
                <div className='cart-mensaje'>
                    <h2> UPS! No hay productos en tu carrito</h2>
                    <button><Link to={`/`}>Ver Catalogo</Link> </button>    
                </div>:
                <div className='cart-box'>
                    {cartContx.products.map(producto => <ItemCart key={producto.id} item={producto}/>)}
                    <div className='cart-box-result'>
                        {`Precio total: ${cartContx.getTotalPrice()}`}
                        <Link to={'/checkout'}>
                            <div className='cart-box-result--bottom'>
                                <p>Finalizar Compra</p>
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;