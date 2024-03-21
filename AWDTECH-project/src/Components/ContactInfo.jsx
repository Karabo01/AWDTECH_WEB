import React, { useState } from 'react';
import './css/ContactInfo.css'

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section>
        <div className="contactUs-container">
            <h2 className="heading">Contact Us</h2>
            <form className="form-card">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Surname" required/>
                <input type="email" placeholder="Email" required/>
                <textarea name="message" cols={30} rows={10}></textarea> 
                <button className="btnSubmitMessage" type="submit">Submit</button>
            </form>
        </div>
        {/* <div className='address'>
            <section>
                <p>adress and contacts</p>
            </section>
        </div>
        <div class="social-links">
            <a href="https://www.facebook.com"><img src={fb} alt="Facebook"/></a>
            <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
            <a href="https://twitter.com"><img src={tw} alt="Twitter"/></a>
            
        </div>

        <div className='footer'>
            <ul className='footerNav'>
                <li>
                    <a href='/whoweare'>Who we are</a>
                </li>
                <li>
                    <a href='/Services'>Services</a>
                </li>
                <li>
                    <a href='/ContactUs'>Contact us</a>
                </li>

                <li>
                    <a href='/Pricing'>Pricing</a>
                </li>
            </ul>
            
        </div> */}
    
      <div className="contact-details">
        <p>Company Name: XYZ Corporation</p>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: info@xyzcorp.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      </section>
  );
};

export default ContactInfo;