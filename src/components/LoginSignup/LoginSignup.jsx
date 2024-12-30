import React, { useState } from 'react'
import "./LoginSignup.css"
import { MdOutlineMail } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
export default function LoginSignup() {
  const navigate= useNavigate();
  const {login}=useAuth();
  const [action,setAction] =useState('login');
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  const handleSubmit=async()=>{
    const endpoint =action==='signup'?"https://urban-app.onrender.com/api/users/register":"https://urban-app.onrender.com/api/users/login";
    try{
      const response =await axios.post(endpoint,formData);
      if(action==='login'){
        login(response.data.token, response.data.user);
        navigate('/checkout');
      }
      else{
        alert("signup successful please log in");
        setAction("login");
      }
    }catch(error){
    console.error(error.response?.data || "an error occures");
    alert("Error:"+ (error.response?.data?.message || "something went worng"));      
      
    }
  };
  return (
    
    <div className='containerSign'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==='login'?<div></div>: <div className="input">
             <ImUser className='icons'/>
            <input type="text"  name="name" 
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}

            />
        </div>}
       
        <div className="input">
            <MdOutlineMail className='icons'/>
            <input type="email"placeholder='Email id'
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div className="input">
            <RiLockPasswordLine className='icons'/>
            <input type="password" placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        </div>
      </div>
      {action==='signup'?<div></div>: <div className="forgot-password">Forgot Password?<span>Click here!</span></div>}
     
      <div className="submit-container">
        
        <div className={action==='login'? "submit gray":"submit"}
        onClick={()=>{
          if(action==='signup')
            handleSubmit();
          else setAction('signup');
        }}
        >Signup</div>
        <div 
         className={action === "signup" ? "submit gray" : "submit"}
         onClick={() => {
          if (action === "login") {
            handleSubmit(); 
            // navigate("/");
          }
          // Perform Login action
          else setAction("login"); 
        
          // Switch to Login mode
        }}
         >
          Login
        </div>
      </div>
      
    </div>
  )
}
