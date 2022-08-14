import React, { useState } from 'react';
import "./LoginScreen.css";
import logo from "../../Assets/Netflix-Logo.png";
import SignInContent from '../../Component/SignInContent/SignInContent';

const LoginScreen = () => {
    const [signIn,setSignIn] = useState(false)
  return (
    <div className='LoginScreen'>
        <div className='LoginScreen__logo'>
    <img src={logo} 
    alt="" />
        </div>
    <div className='LoginScreen__button'>
  <button onClick={()=>setSignIn(true)}>
    Sign In
  </button>
    </div>
    <div className='LoginScreen__gradient' />

    <div className='LoginScreen__body'>
    {signIn ? (<SignInContent />) : (
        <> 
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>
         Ready to watch? Enter your email to create or restart your
         membership.
        </h3>
        <div className='LoginScreen__Input'>
         <form>
            <input type="email" placeholder='Email Address' />
            <button onClick={()=>setSignIn(true)}>
                GET STARTED</button> 
         </form>
        </div>
        </>
        )}
    </div>
    </div>
  )
}

export default LoginScreen;