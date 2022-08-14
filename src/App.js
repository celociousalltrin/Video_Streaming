import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "../src/Pages/HomeScreen/HomeScreen";
import "./App.css";
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen';
import LoginScreen from './Pages/LoginScreen/LoginScreen';

const App = () => {
  const user = null;
  return (
    <div className='app'>
      <Router>
    {
      !user ? (
      <LoginScreen />) :(
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path = "/" element={<HomeScreen />} />
      </Routes>
      )
   }
   </Router>
    </div>
  )
}

export default App