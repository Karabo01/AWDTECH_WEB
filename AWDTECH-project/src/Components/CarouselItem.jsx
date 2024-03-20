import React from "react";

export const CarouselItem = ({item}) =>{
   return( <div className="carousel-item">
     <div></div>
     <div className="carousel-title">{item.title}</div><br></br>
      <img className="carousel-image" src= {item.icon}/> <br></br> 
      <div className="carousel-item-text">{item.description}</div><br></br>
    </div>
   );
};