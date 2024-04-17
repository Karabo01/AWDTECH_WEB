import React from "react";
import { CarouselItem } from "./CarouselItem";
import internet from "./assets/web.png";
import cloudserver from "./assets/serv.png";
import web from "./assets/dev.png";
import { useState } from "react";
import './css/Carousel.css';
export const Carousel = () =>{
    
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
       {
        title: "Web Hosting",
        icon : cloudserver,
        description : "At AwdTech, we understand the critical importance of reliable and high-performance web hosting for your online presence. Our hosting services provide the backbone for your website, ensuring lightning-fast loading times, robust security measures, and 24/7 technical support. Whether you're launching a personal blog or managing a thriving e-commerce platform, trust AwdTech to deliver top-tier hosting solutions tailored to your needs. "
       },

       {
        title: "Web Design",
        icon : internet,
        description : "Elevate your online presence with AwdTech's expert website design services. Our team of skilled designers combines creativity with cutting-edge technology to craft visually stunning and user-friendly websites that captivate audiences and drive results. From sleek and modern aesthetics to seamless navigation and responsive design, we specialize in creating custom-tailored websites that reflect your brand identity and exceed your expectations."
       },

       {
        title: "Web Application",
        icon :web ,
        description : "`Transform your ideas into dynamic '\'digital experiences with AwdTech's professional web application design services. Whether you're looking to streamline internal processes, engage customers with interactive tools, or launch a revolutionary software product, our experienced developers leverage the latest technologies and best practices to bring your vision to life. From concept to deployment, we collaborate closely with you to develop intuitive, scalable, and feature-rich web applications that empower your business to thrive in the digital age.`"
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
    
    

    return(
        <div className="carousel">
            <div className="inner" style = {{transform: `translate(-${activeIndex * 100}%)`}}>
                {items.map((item) =>{
                    return  <CarouselItem item={item}/> ;
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
                 {items.map((item, index) =>{

                    return(
                        <button onClick ={() =>{
                            updateIndex(index)
                        }}className="indicator-buttons">

                    <span className={`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active": "indicator-symbol"}`}>
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
        </div>
      
        
      
    )
};