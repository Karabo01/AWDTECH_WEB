import React from 'react'
import './css/WhoWeAre.css'
import Tech from './assets/tech.png'
import scroll from './assets/scrollicon.png'
const WhoWeAre = () => {
  return (
    
    <div>
        <h1 className='heading'>Who we are</h1>
        <br></br>
        <div className='WhoweareSection'>
            <img src={Tech} alt='' className='techimg' />
            <p className='text'>We are your premier destination for all things web-related. Specializing in web design, web applications, and web hosting. 
            Our team of experts is dedicated to crafting stunning websites, powerful web applications, 
            and reliable hosting services that elevate your brand and drive success. AWDTECH is, for you.
            </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <img className="scrolIcon" src={scroll} />
        
    </div>
  )
}

export default WhoWeAre