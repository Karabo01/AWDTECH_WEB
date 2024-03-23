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
    <section className='ContactPage'>
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
        
        <div className='contactDetails'></div>
        
    </section>
  )
}

export default ContactUs