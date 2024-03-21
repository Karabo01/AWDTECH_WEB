import './css/ContactUs.css'
import fb from './assets/fb.png'
import ig from './assets/ig.png'
import tw from './assets/tw.png'
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
    <section>
        <div className="contactUs-container">
            <h2 className="heading">Contact Us</h2>
            <form className="form-card" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" required name="user_name"/>
                <input type="text" placeholder="Surname" required name="user_surname"/>
                <input type="email" placeholder="Email" required name="user_email"/>
                <textarea name="message" cols={30} rows={10} ></textarea> 
                <input className="btnSubmitMessage" type="submit" value="Send"/>
            </form>
        </div>
        <div class="social-links">
            <a href="https://www.facebook.com"><img src={fb} alt="Facebook"/></a>
            <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
            <a href="https://twitter.com"><img src={tw} alt="Twitter"/></a>
            
        </div>
        <div className='contactDetails'></div>
        <div className='footer'>
            <ul className='footerNav'>
                <li>
                    <a href='/whoweare'>Who we are</a>
                </li>
                <li>
                    <a href='/Services'>Services</a>
                </li>
                <li>
                    <a href='/Pricing'>Pricing</a>
                </li>
                <li>
                    <a href='/ContactUs'>Contact us</a>
                </li>

                
            </ul>
            
        </div>
    </section>
  )
}

export default ContactUs