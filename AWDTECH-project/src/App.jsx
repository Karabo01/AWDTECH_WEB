import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
// For Routing pages
import {Route, Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import whoweare from "./Pages/AboutUs"
// import Contact from "./Pages/ContactUs"
// import Pricing from "./Pages/Pricing"
import { Carousel } from './Components/Carousel';
import { CarouselItem } from './Components/CarouselItem';
import Pricing from './Components/Pricing';
import WhoWeAre from './Components/WhoWeAre';
import AboutUs from './Pages/AboutUs';
import Prices from './Pages/Prices';
import Contact from './Pages/Contact';


function App() {
  
  return (
    
      <div className="App">
        
        <div className="app-container">
          <Navbar/>

            <Routes>
              <Route path='/' element={<Home/>}></Route>
              {/* <Route path='/whoweare' element={<AboutUs/>}/> */}
              <Route path='/Pricing' element={ <Prices/>}></Route>
              <Route path='/ContactUs' element={<Contact/>}></Route>
              <Route path='/Services' element={<Carousel/>}></Route>
              
            </Routes>
         
        </div>
      </div>
   
  );
}

export default App
