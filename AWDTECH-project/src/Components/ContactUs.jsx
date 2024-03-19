import './css/ContactUs.css'
import fb from './assets/fb.png'
import ig from './assets/ig.png'
import tw from './assets/tw.png'
import logo from './assets/Logo.jpg'
const ContactUs = () => {
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
            
        </div>
    </section>
  )
}

export default ContactUs