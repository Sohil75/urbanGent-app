import React, { useContext,useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product';
import CartItem from './CartItem';
import "./cart.css";
import { DataContext } from '../../context/DataContext';
import { shopContext } from '../../context/shopContext';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    
  
    const {products,loading}=useContext(DataContext);
   
    const {cartItems,removeFromCart,clearCart}=useCart();
   
    if(loading){
      return <p>loading..</p>;
    }
    // const {cartItem,getTotalCartAmount,checkout}= useContext(shopContext);
    
 
  return (
    <div className='cart'>
      <h1>Your cart itmes</h1>
      {cartItems.length===0?(
        <p>Your cart is empty</p>
      ):(<div>
        {cartItems.map((item=>(
           <div key={item.id} className="cartItem">
           <img src={item.image} alt={item.name} />
           <div>
             <h4>{item.name}</h4>
             <p>Price: {item.newprice}</p>
             <p>Quantity: {item.quantity}</p>
             <button onClick={() => removeFromCart(item.id)}>Remove</button>
           </div>
         </div>
        )))}
        <Link to="/checkout">
        <button>Checkout</button>
        </Link>
      </div>)}
    </div>

  );
};

export default Cart
