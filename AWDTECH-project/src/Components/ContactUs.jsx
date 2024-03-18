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
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
            
        </div>

        <div className='footer'>
            <img src={logo} alt='' className='logoFoot' />
            <ul className='footerNav'>
                <li>
                    <a href='/whoweare'>who we are</a>
                </li>
                <li>
                    <a href='/Services'>Services</a>
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