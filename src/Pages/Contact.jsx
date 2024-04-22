import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";
import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0 , y: 75}}
    animate={{opacity:1, y: 0}}
    exit={{opacity:0}}
    >
        <ContactUs/>
    </motion.div>
  )
}

export default Contact