import './css/Navbar.css'
import logo from './assets/Logo.jpg'
import fb from './assets/fb.png'
import ig from './assets/ig.png'
import tw from './assets/tw.png'
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
            <a href="https://www.facebook.com"><img src={fb} alt="Facebook"/></a>
            <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
            <a href="https://twitter.com"><img src={tw} alt="Twitter"/></a>
            
        </div>

    </div>

  

  )
  
}

export default Navbar