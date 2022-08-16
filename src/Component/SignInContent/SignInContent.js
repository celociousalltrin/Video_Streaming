import React from 'react';
import "./SignInContent.css";
import { useState } from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import SignupContent from './SignupContent/SignupContent';

const SignInContent = () => {
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
  const [sign,setSign] = useState(false)

  const signIn = ((e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,mail,password)
        .then((authUser)=>{
          console.log(authUser)
        })
        .catch((err)=>{
          console.log(err)
        })
  })

  return (
    <div>
    {sign ? (<SignupContent />) : (
      <>
      <div className='SignInContent'>
      <form>
        <h1>Sign In</h1>

        <input value={mail}
        placeholder='Email' type='email' 
        onChange={(e)=>setMail(e.target.value)}/>

        <input value={password}
        placeholder='password' type="password" 
        onChange={(e)=>setPassword(e.target.value)}/>

        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
         <span className='SignInContent__greybutton'>New to Netfllix?</span>
         <span className='SignInContent__link' onClick={()=>setSign(true)}>Sign up Now</span>
        </h4>
        </form>
    </div>
    </>
    )
  }
    </div>
  )
}

export default SignInContent;