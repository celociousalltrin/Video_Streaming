import React from 'react';
import "./SignInContent.css";
import { useState } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";

const SignInContent = () => {
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")

  const register = ((e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,mail,password)
        .then((authUser)=>{
          console.log(authUser)
        })
        .catch((err)=>{
          console.log(err)
        })
  })

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
         <span className='SignInContent__link' onClick={register}>Sign up Now</span>
        </h4>
        </form>
    </div>
  )
}

export default SignInContent;