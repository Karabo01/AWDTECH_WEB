import './css/Navbar.css'
import logo from './assets/Logo.jpg'
import fb from './assets/fb.png'
import ig from './assets/ig.png'
import tw from './assets/tw.png'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt='' className='logo' />
 
    <ul>
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
    <div class="social-links">
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
        </div>
    </div>

  

  )
  
}

export default Navbar