import './css/ContactUs.css'
import wh from './assets/whatsapp.png'
import ig from './assets/ig.png'
import ld from './assets/linkedin_icon.png'
import logo from './assets/Logo.jpg'
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {motion, useAnimation,useInView} from 'framer-motion';

import Tech from './assets/whoweare-img.jpg'

const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1k8grqs', 'template_afbgi7b', form.current, {
        publicKey: 'sPadDUE4SlKnsxtFL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const ref= useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() =>{
    if(isInView){
      mainControls.start("visible");
    }
},[isInView]);

  return (
    <section className='ContactPage'>
      <h2 className="heading">Contact Us</h2>
      <motion.div ref={ref} className='contact'
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0} 
      }}
      initial= "hidden"
      animate= {mainControls}
      transition={{ duration: 0.5, delay: 0.25}}
            >
      
          <div className="contactUs-container">
             
              <form className="form-card" ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder="Name" required name="user_name"/>
                  <input type="text" placeholder="Surname" required name="user_surname"/>
                  <input type="email" placeholder="Email" required name="user_email"/>
                  <textarea name="message" cols={30} rows={10} ></textarea> 
                  <input className="btnSubmitMessage" type="submit" value="Send"/>
              </form>
          </div>
          
          <div className='contactDetails'>
            <div className='address'>
              <p>AWDTECH</p>
              {/* <p>Address:  Main Street, City, Country</p> */}
              <p>Email: info@awdtech.co.za</p>
              <p>Phone: 068 698 8104</p>
            </div>
            <div className="social-links-contact">
            <a href="https://wa.me/+27686988104"><img src={wh} alt="Whatsapp"/></a>
              <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
              <a href="https://LinkedIn.com"><img src={ld} alt="Linkedin"/></a>
                
            </div>
          </div>

        </motion.div>
      
      
    </section>
  )
}

export default ContactUs