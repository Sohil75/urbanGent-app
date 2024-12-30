import React, { useContext, useState } from 'react'

import ProductCard from '../components/ProductCard/ProductCard';
import "./topWear.css";
import { DataContext } from '../context/DataContext';
import { useCart } from '../context/CartContext';

const BottomWearPage = ({onClicked,addToWishlist}) => {
  const {products,loading}=useContext(DataContext);
  const {addToCart}=useCart();
  const [filter,setFilter]=useState("All");
  
 
  const handleFilterChange= (subcategory)=>{
    setFilter(subcategory);
  };
  let filteredProduct=[];
  try{
   filteredProduct = products.filter((product)=>{
    if(filter==="All"){
      return product.category==='BottomWear';
    }
    console.log(products.map((product)=>product.subcategory));
    return(
     
      
      product.category==='BottomWear' &&
      typeof product.subcategory==='string'&&
       product.subcategory===filter
    );
  });
}
catch(error){
  console.error("error durig filtering",error,products);
  
}
  if(loading){
   return <div>Loading Products...</div>;
  }
  return (
    <div className='product-section'>
      <h1 className='title'>BOTTOMWEAR PRODUCTS</h1>
      <div className='filters'>
        <button onClick={()=>handleFilterChange("All")}>ALL</button>
        <button onClick={()=>handleFilterChange("Jeans")}>JEANS</button>
        <button onClick={()=>handleFilterChange("Cargos")}>CARGOS</button>
        <button onClick={()=>handleFilterChange("Chinos")}>CHINOS</button>
      </div>
      <ul className='product-list'>
        {filteredProduct.map((product,index)=>(
          <ProductCard product={product} key={product.id || index} onClicked={onClicked} onAddToCart={()=>addToCart(product)} addToWishlist={addToWishlist}/>
        ))}
      </ul>
      
    </div>
  )
}

export default BottomWearPage
