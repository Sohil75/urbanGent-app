import React from 'react'
import './wishlist.css';
import ProductCard from '../components/ProductCard/ProductCard';
import { useCart } from '../context/CartContext';

const WishlistPage = ({ wishlist, removeFromWishlist }) => {
  const {addToCart}= useCart();
  const handleAddToCart =(product)=>{
    addToCart(product);
    removeFromWishlist(product.id);
  };
    return (
      <div className="wishlist-section">
        <h1 className='title'>Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty!</p>
        ) : (
          <ul className="wishlist-list">
            {wishlist.map((product) => (
              <ProductCard key={product.id}
              product={product}
              onClicked={()=>{}}
              addToWishlist={()=>removeFromWishlist(product.id)}
              onAddToCart={()=>{handleAddToCart(product)}}/>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default WishlistPage;