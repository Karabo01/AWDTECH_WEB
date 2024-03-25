import React from "react";
import { CarouselItem } from "./CarouselItem";
import internet from "./assets/WebDesign.png";
import cloudserver from "./assets/Hosting.png";
import web from "./assets/WebApp.png";
import { useState } from "react";
import './css/Carousel.css';
export const Carousel = () =>{
    
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
       {
        title: "Web Hosting",
        icon : cloudserver,
        description : "This is what we do and stuff"
       },

       {
        title: "Web Design",
        icon : internet,
        description : "This is what we do and stuff"
       },

       {
        title: "Web Application",
        icon :web ,
        description : "This is what we do and stuff"
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