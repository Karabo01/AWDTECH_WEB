import React, {useEffect, useRef} from 'react';
import './css/WhoWeAre.css';
import Tech from './assets/whoweare-img.jpg';
import scroll from './assets/scrollicon.png'
import {motion, useAnimation,useInView} from 'framer-motion';


const WhoWeAre = () => {
    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(() =>{
      if(isInView){
        mainControls.start("visible");
      }
  },[isInView]);

  return (
  
    <div ref={ref} className='WhoweareSection'>
        
        <br></br>
        <motion.div className='Panel' 
           variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0} 
          }}
          initial= "hidden"
          animate= {mainControls}
          transition={{ duration: 0.5, delay: 0.25}}
        >
        
          <div className='image-whoweare'>
           
                <img src={Tech} alt='' className='techimg' />
                
          </div>
            <div className='text'>
            <h1 className='heading'>Who we are</h1>
              <p >We are your premier destination for all things web-related. Specializing in web design, web applications, and web hosting. 
                AWDTECH is, for you.
                  </p>
            </div>
        </motion.div>
        
    </div>
  )
}

export default WhoWeAre