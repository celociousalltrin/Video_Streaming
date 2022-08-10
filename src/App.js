import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "../src/Pages/HomeScreen/HomeScreen";

const App = () => {
  const user = 75;
  return (
    <div className='app'>
      <Router>
    {
      !user ? (
      <h1>Login Screen</h1>) :(
      <Routes>
        {/* <Route path="/profile" element={} /> */}
        <Route path = "/" element={<HomeScreen />} />
      </Routes>
      )
   }
   </Router>
    </div>
  )
}

export default App