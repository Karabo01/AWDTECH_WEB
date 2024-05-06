import React from "react";
import { CarouselItem } from "./CarouselItem";
import internet from "./assets/web.png";
import cloudserver from "./assets/serv.png";
import web from "./assets/dev.png";
import { useState,useEffect,useRef } from "react";
import './css/Carousel.css';
import {motion, useAnimation,useInView} from 'framer-motion';

export const Carousel = () =>{
    
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
       {
        title: "Web Hosting",
        icon : cloudserver,
        description : <pre>At AwdTech,
                       we understand the critical <br></br>importance of 
                       reliable and high-performance web <br></br>hosting
                       for your online presence.Our hosting <br></br>services provide 
                       the backbone for your website,<br></br>ensuring lightning-fast loading times, 
                       robust <br></br>security measures, and 24/7 technical support. <br></br><br></br>Whether you're 
                       launching a personal blog or <br></br>managing a thriving e-commerce platform, 
                       trust <br></br>AwdTech to deliver top-tier hosting solutions <br></br>tailored to your needs.</pre> 
       },

       {
        title: "Web Design",
        icon : internet,
        description : <pre>Elevate your online presence with AwdTech's<br></br>expert website design services. Our team of <br></br>skilled designers combines creativity with cutting<br></br>-edge technology to craft visually stunning and <br></br>user-friendly websites that captivate audiences <br></br>and drive results. <br></br><br></br>From sleek and modern aesthetics to seamless <br></br>navigation and responsive design, we specialize <br></br>in creating custom-tailored websites that reflect<br></br> your brand identity and exceed your <br></br>expectations.</pre>
       },

       {
        title: "Web Application",
        icon :web ,
        description : <pre>Transform your ideas into dynamic digital <br></br>experiences with AwdTech's professional web <br></br>application design services. Whether you're <br></br>looking to streamline internal processes, engage <br></br>customers with interactive tools, or launch a <br></br>revolutionary software product, our experienced <br></br>developers leverage the latest technologies and <br></br>best practices to bring your vision to life. <br></br><br></br>From concept to deployment, we collaborate <br></br>closely with you to develop intuitive, scalable, <br></br>and feature-rich web applications that empower <br></br>your business to thrive in the digital age.</pre>
       }
    ];

    const updateIndex =(newIndex) =>{
        if(newIndex <0){
            newIndex = 0;
        }else if(newIndex >= items.length){
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    
    

    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(() =>{
      if(isInView){
        mainControls.start("visible");
      }
  },[isInView]);


    return(
        <motion.div className="carousel" ref={ref}
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0} 
          }}
          initial= "hidden"
          animate= {mainControls}
          transition={{ duration: 0.5, delay: 0.25}}
        
        
        >
            <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item, index) => {
                    return <CarouselItem key={index} item={item} />;
                })}
           
            </div>

            <div className="carousel-buttons">
                <button onClick={() =>{
                  updateIndex(activeIndex - 1)
                }} className="button-arrow"> 
                
                <span className="material-symbols-outlined">
                   arrow_back_ios
                </span>
                </button>

                <div className="indicators">
    {items.map((item, index) => {
        return (
            <button key={index} onClick={() => {
                updateIndex(index)
            }} className="indicator-buttons">
                <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                    radio_button_checked
                </span>
            </button>
        );
    })}
</div>
                <button onClick={() =>{
                  updateIndex(activeIndex + 1)
                }}className="button-arrow">
                <span className="material-symbols-outlined">
                      arrow_forward_ios
                       </span>
                </button>
            </div>
        </motion.div>
      
        
      
    )
};