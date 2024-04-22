import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";

import React from 'react'
import Pricing from "../Components/Pricing";
import {motion} from 'framer-motion'
const Prices = () => {
  return (
    <motion.div
    initial={{opacity:0 , y: 75}}
    animate={{opacity:1, y: 0}}
    exit={{opacity:0}}>
        <Pricing/>
        <ContactUs/>
    </motion.div>
  )
}

export default Prices