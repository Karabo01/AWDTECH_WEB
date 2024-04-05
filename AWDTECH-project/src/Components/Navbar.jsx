import './css/Navbar.css'
import logo from './assets/Logo.jpg'
import wh from './assets/whatsapp.png'
import ig from './assets/ig.png'
import ld from './assets/linkedin_icon.png'
const Navbar = () => {
  return (
    <div className='nav'>
       <a href='/'> <img src={logo} alt='' className='logo' /></a>
 
    <ul>
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
        <div class="social-links">
            <a href="https://wa.me/+27686988104"><img src={wh} alt="Whatsapp"/></a>
            <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
            <a href="https://LinkedIn.com"><img src={ld} alt="Linkedin"/></a>
            
        </div>

    </div>

  

  )
  
}

export default Navbar