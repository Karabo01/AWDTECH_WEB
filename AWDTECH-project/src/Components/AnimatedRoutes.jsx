import React from 'react'
import {Route , Routes, useLocation }from 'react-router-dom';
import Home from "../Pages/Home"
import { Carousel } from '../Components/Carousel';
import AboutUs from '../Pages/AboutUs';
import Prices from '../Pages/Prices';
import Contact from '../Pages/Contact';

import {AnimatePresence} from "framer-motion";


const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/whoweare' element={<AboutUs/>}/>
        <Route path='/Pricing' element={ <Prices/>}></Route>
        <Route path='/ContactUs' element={<Contact/>}></Route>
        <Route path='/Services' element={<Carousel/>}></Route> 
    </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes