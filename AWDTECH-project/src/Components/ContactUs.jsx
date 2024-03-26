import './css/ContactUs.css'
import wh from './assets/whatsapp.png'
import ig from './assets/ig.png'
import ld from './assets/linkedin_icon.png'
import logo from './assets/Logo.jpg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  return (
    <section className='ContactPage'>
      <h2 className="heading">Contact Us</h2>
      <div className='contact'>
      
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
            <div class="social-links">
            <a href="https://wa.me/+27686988104"><img src={wh} alt="Whatsapp"/></a>
              <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
              <a href="https://LinkedIn.com"><img src={ld} alt="Linkedin"/></a>
                
            </div>
          </div>

        </div>
        

        

    </section>
  )
}

export default ContactUs