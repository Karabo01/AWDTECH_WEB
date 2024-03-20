import React from "react";
import { CarouselItem } from "./CarouselItem";
import internet from "./assets/internet.png"
import cloudserver from "./assets/cloud-server.png"
import web from "./assets/web.png"

export const Carousel = () =>{

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
    ]
    return(
        <div className="Carousel">
            <div className="inner">
                {items.map((item) =>{
                    return  <CarouselItem item={item}/> ;
                })}
           
            </div>
        </div>
      
        
      
    )
};