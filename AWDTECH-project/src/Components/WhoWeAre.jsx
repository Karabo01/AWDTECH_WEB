import React from 'react'
import './css/WhoWeAre.css'
import Tech from './assets/whoweare-img.jpg'
import scroll from './assets/scrollicon.png'


const WhoWeAre = () => {
  return (
    
    <div className='WhoweareSection'>
        
        <br></br>
        <div className='Panel'>
        
          <div className='image-whoweare' >
                <img src={Tech} alt='' className='techimg' />
                
          </div>
            <div className='text'>
            <h1 className='heading'>Who we are</h1>
              <p >We are your premier destination for all things web-related. Specializing in web design, web applications, and web hosting. 
                AWDTECH is, for you.
                  </p>
            </div>
        </div>
        
    </div>
  )
}

export default WhoWeAre