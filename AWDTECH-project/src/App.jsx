import React from 'react'
import {BrowserRouter as  Router }from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import AnimatedRoutes from './Components/AnimatedRoutes';



function App() {
  return (
    
      <div className="App">
        
        <div className="app-container">
            <Router>
            <Navbar/>
            <AnimatedRoutes/>
            <Footer/>
            </Router>

        </div>
      </div>
   
  );
}

export default App
