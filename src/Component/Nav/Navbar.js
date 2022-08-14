import React from 'react';
import "./Navbar.css";
import logo from "../../Assets/Netflix-Logo.png";
import avatar from "../../Assets/Netflix-avatar.png";
import {useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';

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

          <NavLink to="/">
          <img 
             src={logo}
             alt=""
             className='Navbar__logo'>
          </img>
          </NavLink>

          <NavLink to="/profile">
          <img 
             src={avatar}
             alt=""
             className='Navbar__avatar'>
          </img>
          </NavLink>
          
        </div>
    </nav>
  )
}

export default Navbar;