import React from "react";
import './css/Carousel.css';
export const CarouselItem = ({item}) =>{
   return( 
   <div className="carousel-item">
      <div className="carousel-image">
        <img alt="" src= {item.icon}/> <br></br> 
      </div>
      <div className="carousel-texts">
        <div className="carousel-title">
          {item.title}
          <p>
          {item.description}
          </p>
        </div><br></br>
        
      </div>
      
    </div>
   );
};