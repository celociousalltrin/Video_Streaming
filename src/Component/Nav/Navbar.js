import React from 'react';
import "./Navbar.css";
import logo from "../../Assets/Netflix-Logo.png";
import avatar from "../../Assets/Netflix-avatar.png";
import {useState,useEffect} from "react";

const Navbar = () => {
  const [show,setShow] = useState(false)

  const transitionNavbar = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    } else{
      setShow(false)
    }
  };

 useEffect(()=>{
   window.addEventListener("scroll",transitionNavbar);

   return (()=>window.removeEventListener("scroll",transitionNavbar));
 },[]) 


  return (
    <nav className={`Navbar ${show && `Navbar__black`}`}>
        <div className="Navbar__contents">
          <img 
             src={logo}
             alt=""
             className='Navbar__logo'>
          </img>
          <img 
             src={avatar}
             alt=""
             className='Navbar__avatar'>
          </img>
        </div>
    </nav>
  )
}

export default Navbar;