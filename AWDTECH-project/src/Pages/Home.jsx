import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";



import React from 'react'
import WhoWeAre from "../Components/WhoWeAre";
import Pricing from "../Components/Pricing";
import { Carousel } from "../Components/Carousel";
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition: {duration: 0.9}}}
    >
      <WhoWeAre/>
      {/* <Carousel/> */}
      {/* <Pricing/> */}
      {/* <ContactUs/> */}
      
    </motion.div>
  )
}

export default Home