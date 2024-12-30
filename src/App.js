import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

import TopWearPage from './pages/TopWearPage';

import LoginSignup from './components/LoginSignup/LoginSignup';
import { useState } from 'react';
import BottomWearPage from './pages/BottomWearPage';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './components/Checkout/Checkout';
import AdressPayment from './components/Adress/AdressPayment';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import FormalWearPage from './pages/FormalWearPage';


function App() {
  const [cartItem,setCartItem] = useState(0);
  const onClicked=()=>{
    setCartItem((prevItem)=>prevItem+1);
  };

  const [wishlist, setWishlist]=useState([]);
  const addToWishlist =(Product)=>{
    if(!wishlist.some((item)=>item.id===Product.id)){
      setWishlist([...wishlist,Product]);
    }
  };
  const removeFromWishlist =(productId)=>{
    setWishlist(wishlist.filter((item)=>item.id !==productId));
  };

  
  return (
   <div>
    <AuthProvider>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
      <NavBar cartItem={cartItem}/>
      <Home onClicked={onClicked} addToWishlist={addToWishlist}/>
      <Footer/>
      </>}/>
      <Route path='/TopWear' element={
        <>
        <NavBar cartItem={cartItem}/>
        <TopWearPage category="TopWear" onClicked={onClicked} addToWishlist={addToWishlist}/>
        <Footer/>
        </>
      }/>
      <Route path='/BottomWear' element={
        <>
        <NavBar cartItem={cartItem}/>
        <BottomWearPage category="BottomWear" onClicked={onClicked} addToWishlist={addToWishlist}/>
        <Footer/>
        </>
      }/>
      <Route path='/Formals' element={
        <>
        <NavBar cartItem={cartItem}/>
        <FormalWearPage category="Formals" onClicked={onClicked} addToWishlist={addToWishlist}/>
        <Footer/>
        </>
      }/>
      <Route path='/checkout' element={
        <>
        <ProtectedRoute>
        <NavBar cartItem={cartItem}/>
        <CheckoutPage/>
        </ProtectedRoute>
        </>
      }/>
      <Route
      path='/wishlist' element={
      <><ProtectedRoute>
      <NavBar cartItem={cartItem}/>
      <WishlistPage wishlist={wishlist} removeFromWishlist={removeFromWishlist}/>
      </ProtectedRoute>
      </>}
      
      />
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/addresspayment' element={<AdressPayment/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
   </div>
    
  );
}

export default App;
