import React from 'react'
import vid from './assets/video.mp4'
import './css/Landing.css'

const Landing = () => {
  return (
    <div className="landing">
        <video autoPlay muted loop >
            <source src={vid}/>
        </video>
    </div>
  )
}

export default Landing