import React from 'react';
import { useSelector } from 'react-redux';
import "./ProfileScreen.css";
import { selectUser } from '../../features/userSlice';
import Nav from "../../Component/Nav/Navbar";
import avatar from "../../../src/Assets/Netflix-avatar.png"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import "./ProfileScreen.css";


const ProfileScreen = () => {
  const user = useSelector(selectUser)
 
   const signaway = ()=>{
    signOut(auth)
   }

  return (
    <div className='ProfileScreen'>
        <Nav />
        <div className='ProfileScreen__body'>
          <h1>Edit Profile</h1>
          <div className='ProfileScreen__info'>
         <img src={avatar} alt=" "/>
         <div className='ProfileScreen__details'>
          <h2>{user.email}</h2>
          <div className='ProfileScreen__plans'>
            <h3>Plans</h3>
            {/* plans */}
            <button className='ProfileScreen__signOut' onClick={signaway}>
              Sign Out
            </button>
          </div>
         </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen;


