import React from 'react'
import Person from '../components/Person/Person'
import Banner from '../components/Banner/Banner';
import Popular from '../components/Popular/Popular';
import productDetails from "../components/assets/products.json";
const Home = ({onClicked,addToWishlist}) => {
  return (
    <div>
      
     <Banner/>
     {/* topwear product */}
     <Popular products={productDetails} onClicked={onClicked} addToWishlist={addToWishlist}/> 
     {/* bottom wear products */}
     <Person products={productDetails} onClicked={onClicked} addToWishlist={addToWishlist}/>
    </div>
  )
}

export default Home
