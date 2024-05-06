import React from 'react'
import PricingCard from "./PricingCard";
import './css/Pricing.css'
import { useState, useEffect, useRef } from 'react'
import {motion, useAnimation,useInView} from 'framer-motion';

const Pricing = () => {
    const [selectMonthly, setSelectMonthly] = useState(true);
    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(() =>{
      if(isInView){
        mainControls.start("visible");
      }
  },[isInView]);
  return (
    <div>
        <motion.div ref={ref} className='pricingSection'
        
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0} 
        }}
        initial= "hidden"
        animate= {mainControls}
        transition={{ duration: 0.5, delay: 0.25}}>
        <header>
            <h1 className="header-topic">Our Pricing Plan</h1>
            <div className="header-row">
              <p>Web Design</p>
              <label className="price-switch">
                <input
                  className="price-checkbox"
                  onChange={() => {
                    setSelectMonthly((prev) => !prev);
                  }}
                  type="checkbox"
                />
                <div className="switch-slider"></div>
              </label>
              <p>Hosting</p>
            </div>
          </header>
          {/* Cards here */}
          <div className="pricing-cards">
            <PricingCard
              title="Essential"
              price={selectMonthly ? "R250/pm" : "R2500"}
              storage={selectMonthly ? "5GB Storage" : "1 page"}
              users={selectMonthly? "25 users": "Responsive"}
              WebTraffic={selectMonthly? "Unlimited Web Traffic":"1 month free support"}
              Maintenance={selectMonthly? "Maintenance":"Whatsapp click to chat"}
              
            />
            <PricingCard
              title="Deluxe"
              price={selectMonthly ? "R360/pm" : "R3500"}
              storage={selectMonthly ? "10GB Storage" : "1-4 pages"}
              users={selectMonthly? "75 users": "Responsive"}
              WebTraffic={selectMonthly? "Unlimited Web Traffic":"3 months free support"}
              Maintenance={selectMonthly? "Maintenance":"Whatsapp click to chat"}
              
            />
            <PricingCard
              title="Premium"
              price={selectMonthly ? "R450/pm" : "R4500"}
              storage={selectMonthly ? "15GB Storage" : "1-10 pages"}
              users={selectMonthly? "100 users": "Responsive"}
              WebTraffic={selectMonthly? "Unlimited Web Traffic":"6 months free support"}
              Maintenance={selectMonthly? "Maintenance":"Whatsapp click to chat"}

            />
          </div>
          </motion.div>
    </div>
  )
}

export default Pricing