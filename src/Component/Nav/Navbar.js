import React from 'react';
import "./Navbar.css";
import logo from "../../Assets/Netflix-Logo.png";
import avatar from "../../Assets/Netflix-avatar.png"


const Navbar = () => {
  return (
    <nav className="Navbar">
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