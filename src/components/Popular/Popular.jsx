import React from 'react'
import "./popular.css";
import ProductCard from '../ProductCard/ProductCard';
import { useCart } from '../../context/CartContext';

const Popular = ({products=[],onClicked,addToWishlist}) => {
  const topWearProducts= products.filter(product=>product.category==="TopWear");
  const {addToCart}=useCart();
  return (
    <div className='product-section'>
      <h1 className='title'>TOPWEAR</h1>  
        <ul className='product-list'>
          {/* {productDetails.map(eachObj=>
            <ProductCard product={eachObj} key={eachObj.id} />
          )} */}
          {topWearProducts.map(product=>(
            <ProductCard product={product} key={product.id} onClicked={onClicked} onAddToCart={addToCart} addToWishlist={addToWishlist}/>
          ))
      
          }
        </ul>
    </div>
  )
}

export default Popular;
