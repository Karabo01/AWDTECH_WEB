import React, { useState } from 'react'; // Import useState if not already imported
import './css/Navbar.css';
import logo from './assets/Logo.jpg';
import wh from './assets/whatsapp.png';
import ig from './assets/ig.png';
import ld from './assets/linkedin_icon.png';
import menu from './assets/menu.png';

const Navbar = () => {
    // State to track whether the sideNav is open or closed
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    var sideNav = document.getElementsByClassName("sideNav")
    // Toggle the sideNav when the menu image is clicked
    const handleMenuClick = () => {
        setIsSideNavOpen(!isSideNavOpen);
        if(isSideNavOpen){
            sideNav.style.right = "0"
        }else{
            sideNav.style.right = "-250px"
        }
    };

    return (
        <div className='navContainer'>
            {/* SideNav */}
            <div className={`sideNav ${isSideNavOpen ? 'open' : ''}`}>
                <nav>
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
                </nav>
            </div>

            {/* Main Navigation */}
            <div className='nav'>
                <div className='navlogo'>
                    <a href='/'>
                        <img src={logo} alt='' className='logo' />
                    </a>
                    <img
                        src={menu}
                        alt='Menu'
                        className='menu'
                        onClick={handleMenuClick} // Add onClick event handler
                    />
                </div>
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
                <div className='social-links'>
                    <a href='https://wa.me/+27686988104'>
                        <img src={wh} alt='Whatsapp' />
                    </a>
                    <a href='https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1'>
                        <img src={ig} alt='Instagram' />
                    </a>
                    <a href='https://LinkedIn.com'>
                        <img src={ld} alt='Linkedin' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
