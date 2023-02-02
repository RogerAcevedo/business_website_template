import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// IMPORT CSS
import '../styles/Home.css';

// IMPORT PICTURES
import BannerImage from '../assets/banner.png'

function Home() {
  return (
    <div className='home' 
    style={ {backgroundImage: `url(${BannerImage})` }}
    >
        {/* ADD BACKGROUND PIC WITH STYLE */}
        <div className='headerContainer' >
            <h1>Mission Hills Smokehsop</h1>
            <h4>Everything you need, all the time</h4>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>
        </div>

    </div>
    
  )
}

export default Home;