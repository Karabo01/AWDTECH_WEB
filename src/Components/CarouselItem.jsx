import React from "react";
import './css/Carousel.css';
export const CarouselItem = ({item}) =>{
   return( 
   <div className="carousel-item">
    <div className="flexcontainer">
      <img alt="" src= {item.icon}/>
      
        <div className="carousel-title">
          {item.title}<br></br>
          <p>
          {item.description}
          </p>
        </div><br></br>
        
    
    </div>
    </div>
   );
};