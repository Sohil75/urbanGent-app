import React from 'react'
import "./ProductCard.css";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({product,onClicked,addToWishlist,onAddToCart}) => {
  const addToCart=()=>{
    onClicked();
    onAddToCart(product);
    console.log("done");
  };
  return (
   <li className='product-item'>
    <img src={product.image} alt={product.name} />
    <h4>{product.name}</h4>
    <h5>{product.rating}</h5>
    <p>{product.newprice}</p>
    <div className="add-cart-container">
      <span className='wishlist-icon' onClick={()=>addToWishlist(product)}><CiHeart /></span>
      {/* <button className='add-cart-btn' onClick={addToCart}>Add to Cart</button> */}
      <button className='add-cart-btn' onClick={addToCart}>Add to Cart</button>
      </div>
    
   </li>
  )
}

export default ProductCard
