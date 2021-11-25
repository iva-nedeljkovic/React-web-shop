import React, {useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

import '@fontsource/roboto';

import Home from './components/Home.jsx';


const Homepage = () => {

    return (
        
        <div  style = {{width:"100%", height:"30rem"}}> 
          <Home/>         
        </div>
        
    );
}

export default Homepage;
