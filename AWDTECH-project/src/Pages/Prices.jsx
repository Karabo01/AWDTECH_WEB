import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";

import React from 'react'
import Pricing from "../Components/Pricing";
import {motion} from 'framer-motion'
const Prices = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition: {duration: 0.9}}}>
        <Pricing/>
        {/* <ContactUs/> */}
    </motion.div>
  )
}

export default Prices