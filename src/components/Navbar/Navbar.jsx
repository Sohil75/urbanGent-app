import React ,{useState}from 'react'
import './Navbar.css';
import { IoIosCart } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { CiHeart } from "react-icons/ci";

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
function Navbar({cartItem}){
  
  
  // const[cartItem, setCartItem]=useState(5);
   const[menu,setMenu]= useState("Home");
  const {cartItems}=useCart();
  const cartCount= cartItems.reduce((count,item)=>count+item.quantity,0);
  return(
  <>
  <div className="wrapper">
  <nav className="container">
    <div className='logo'>
        <a href="/">UrbanGent</a>
    </div>
    <div className="dropdownLinks">
      <div className="dropdown"> 
      <button onClick={()=>{setMenu("home")}} className='dropBtn'><Link to="/">HOME</Link>{menu==='home'?<hr />:<></>}</button>
      <button onClick={()=>{setMenu("topwear")}} className='dropBtn'><Link   to='/topwear'>TOPWEAR</Link>{menu==='topwear'?<hr />:<></>}</button>
     
      </div>
      <div className="dropdown"> 
      <button onClick={()=>{setMenu("bottomwear")}} className='dropBtn'><Link style={{textDecoration:'none'}} to="/bottomwear">BOTTOMWEAR</Link>{menu==="bottomwear"?<hr/>:<></>}</button>
     
      </div>
      <button  onClick={()=>{setMenu("Formals")}} className='dropBtn'><Link style={{textDecoration:'none'}} to="/Formals">FORMALWEAR</Link>{menu==="winterwear"?<hr/>:<></>}</button>
    </div>
    <div className="search-bar">
      <Link style={{textDecoration:'none'}} to="/checkout"><button className=' icn cart-button'><IoIosCart /> <span className='cart-count'>{cartCount}</span></button></Link>
      <Link style={{textDecoration:'none'}} to='/wishlist'> <button className=' icn wishlist-button'><CiHeart /></button></Link>
     
     <Link style={{textDecoration:'none'}} to="/loginsignup"><button className=' icn profile-button'><ImUser /></button></Link> 
    </div> 
  </nav>
  </div>
  </>
  );
}

export default Navbar;
