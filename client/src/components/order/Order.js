import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './order.css'

const Order = () => {
    const [prducts, setProducts]=useProducts()
    const [cart,setCart]=useCart(prducts)

    const handleRemoveProduct = product=>{
       const rest = cart.filter(pd=> pd._id !== product._id)
       setCart(rest);
       removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>
           <div className="review-items-container">
            {cart.map(product=><ReviewItem key={product._id} handleRemoveProduct={handleRemoveProduct} product={product}/>)}
           </div>
           <div className="cart-container">
               {/* use children */}
                <Cart cart={cart}><Link to='/shipment'><button>proceed shipping</button></Link></Cart>
           </div>
        </div>
    );
};

export default Order;