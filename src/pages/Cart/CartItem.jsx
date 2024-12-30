import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import { shopContext } from '../../context/shopContext';

const CartItem=(props)=>{
    // const {product}=props;
    const {item,removeFromCart}=props;
  

    return(
        <div className='cartItem'>
            <img src={item.image} alt="item"  />
            <div className="description">
                <p>
                    <b>{item.name}</b>
                </p>
                <p>Price:{item.newprice}</p>
                <p>Quantity:{item.quantity}</p>
                <button onClick={()=>removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;