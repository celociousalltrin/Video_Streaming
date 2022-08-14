import React from 'react';
import "./SignInContent.css";

const SignInContent = () => {
  return (
    <div className='SignInContent'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='password' type="password"/>
        <button type='submit'>Sign In</button>
        <h4>
         <span className='SignInContent__greybutton'>New to Netfllix?</span>
         <span className='SignInContent__link'>Sign up Now</span>
        </h4>
        </form>
    </div>
  )
}

export default SignInContent;