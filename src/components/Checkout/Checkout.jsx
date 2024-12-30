import React from "react";
import "./checkout.css"; // Include styles in a CSS file for better organization
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const {cartItems,removeFromCart}=useCart();
  const navigate = useNavigate();
  const calculatedTotal =()=>{
    return cartItems.reduce(
      (total,item)=>total+ item.newprice*item.quantity,0
    );
  };
  const handleProceedToPayment =()=>{
    const amountTotal = calculatedTotal();
    navigate("/addresspayment",{state:{calculatedTotal:amountTotal}});
  };
  return (
    <>
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Product Section */}
        <div className="product-section">
          {cartItems.map((item,index)=>(
            <div className="product-card" key={item.id || index}>
            <img
              src={item.image} alt={item.name} 
              className="product-image"
            />
            <div className="product-details">
              <h3>{item.name}</h3>
              <p className="product-category">{item.category}</p>
              <div className="product-pricing">
                <span className="product-price">{item.newprice}</span>
                <span className="original-price">{item.oldprice}</span>
              </div>
            </div>
            <div className="product-actions">
              <select className="quantity-select">
                <option value="1">{item.quantity}</option>
              </select>
              <button className="remove-button" onClick={()=>removeFromCart(item.id)}>Move to Wishlist</button>
            </div>
          </div>
          ))}
          
        </div>
        {/* Price Details Section */}
        <div className="price-details-section">
          <h4>Price Details </h4>
          <div className="price-row">
            <span>Total MRP (Inc. of Taxes)</span>
            <span>{calculatedTotal()}</span>
          </div>
          <button className="checkout-button" onClick={handleProceedToPayment} >Proceed to Address & Payment</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
