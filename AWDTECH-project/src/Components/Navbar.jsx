import './css/Navbar.css'
import logo from './assets/Logo.png'
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
    </div>

  

  )
  
}

export default Navbar