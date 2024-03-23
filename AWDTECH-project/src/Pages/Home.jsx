import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";


import React from 'react'
import WhoWeAre from "../Components/WhoWeAre";
import Pricing from "../Components/Pricing";
import { Carousel } from "../Components/Carousel";


const Home = () => {
  return (
    <div>
      <Landing/>
      <WhoWeAre/>
      <Carousel/> 
       <Pricing/> 
       <ContactUs/>
      
    </div>
  )
}

export default Home