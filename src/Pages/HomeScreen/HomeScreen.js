import React from 'react';
import "./HomeScreen.css";
import Nav from '../../Component/Nav/Navbar';
import Banner from '../../Component/Banner/Banner';
import Row from '../../Component/Row/Row';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <Nav />

        <Banner />
        
        <Row />
    
        </div>
  )
}

export default HomeScreen;

