import React from 'react'
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiArrowToTop } from "react-icons/bi";
const Footer =()=>{
    return(
        <footer className="footer">
        
        <div className="footer-brand">
          <h1>UrbanGent</h1>
          <p>UrbanGent is your destination for premium men's fashion. We offer stylish, high-quality apparel and accessories, blending timeless classics with modern trends. Redefine your style with comfort and confidence at UrbanGent.</p>
        </div>
  
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-icons">
              <a href="/"><CiFacebook className='social-icon'/></a>
              <a href="/"><FaInstagram className='social-icon' /></a>
              <a href="/"><FaSquareXTwitter className='social-icon' /></a>
            </div>
          </div>
        </div>
  
        
        <div className="newsletter">
          <p>Stay updated with the latest trends!</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
  
        <button className="backToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <BiArrowToTop />
        </button>
  
       
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} UrbanGent. All Rights Reserved.</p>
        </div>
        
      </footer>
    )
};


export default Footer;