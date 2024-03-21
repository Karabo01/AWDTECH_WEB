import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
// For Routing pages
import {Route, Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
// import Contact from "./Pages/ContactUs"
// import Pricing from "./Pages/Pricing"
import { Carousel } from './Components/Carousel';
import { CarouselItem } from './Components/CarouselItem';
import Pricing from './Components/Pricing';


function App() {
  
  return (
    //Routes
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Home/>}/>
    //       <Route path="/home" element={<Home/>}/>
    //       <Route path="/pricing" element={<Pricing/>}/>
    //       <Route path="/contactUs" element={<Contact/>}/>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    
      <div className="App">
        
        <div className="app-container">
          <Navbar/>

            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Pricing' element={ <Pricing/>}></Route>
              <Route path='/ContactUs' element={<ContactUs/>}></Route>
              <Route path='/Services' element={<Carousel/>}></Route>
              
            </Routes>
         
        </div>
      </div>
   
  );
}

export default App
