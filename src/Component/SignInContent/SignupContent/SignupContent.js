import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../firebase';
import "./SignupContent.css"

const SignupContent = () => {
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
    

  return (
   <div className='SignupContent'>
<form>
        <h1>Sign up</h1>
        <h5>
         Ready to watch? Enter your email to create  your
         membership.
        </h5>

        <input value={mail}
        placeholder='Email' type='email' 
        onChange={(e)=>setMail(e.target.value)}/>

        <input value={password}
        placeholder='password' type="password" 
        onChange={(e)=>setPassword(e.target.value)}/>

        <button type='submit' onClick={register}>Sign up</button>
        </form>
   </div>
  )
}

export default SignupContent;