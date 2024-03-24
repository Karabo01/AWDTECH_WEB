import ContactUs from "../Components/ContactUs";
import Landing from "../Components/Landing";
import React, {useEffect, useRef} from 'react'
import WhoWeAre from "../Components/WhoWeAre";
import Pricing from "../Components/Pricing";
import { Carousel } from "../Components/Carousel";
import {motion, useAnimation,useInView} from 'framer-motion'

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls  = useAnimation();
  
  useEffect(()=>{
    if (isInView){
      mainControls.start("visible");
    }
  }, {isInView});

  return (
    <div>
      <Landing/>
   
    <motion.div
    varients={{
      hidden: {opacity: 0, y: 75},
      visible: { opacity: 1, y:0},
    }}
    initial="hidden"
    animate= {mainControls}
    transition={{duration: 0.5, delay: 0.25}}
    >
      
      <WhoWeAre/>
     
      
    </motion.div>
    <div>
    <Carousel/> 
       <Pricing/> 
       <ContactUs/>
    </div>
    </div>
  )
}

export default Home