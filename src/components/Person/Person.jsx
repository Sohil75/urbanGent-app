import React from 'react'
import "./Person.css"
import { useCart } from '../../context/CartContext';
import ProductCard from '../ProductCard/ProductCard';
const Person = ({products ,onClicked,addToWishlist}) => {

  const bottomWearProducts = products.filter(product=>product.category==="BottomWear");
  const {addToCart}=useCart();
  return (
    <div className='product-section'>
    <h1 className='title'>BottomWear</h1>  
      <ul className='product-list'>
       
        {bottomWearProducts.map(product=>(
          <ProductCard product={product} key={product.id} onClicked={onClicked} onAddToCart={addToCart} addToWishlist={addToWishlist}/>
        ))}
      </ul>
      </div>
  )
}

export default Person
