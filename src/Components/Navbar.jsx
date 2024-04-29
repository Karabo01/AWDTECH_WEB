import React, { useState } from 'react';
import './css/Navbar.css';
import logo from './assets/Logo.jpg';
import wh from './assets/whatsapp.png';
import ig from './assets/ig.png';
import ld from './assets/linkedin_icon.png';
import menu from './assets/menu.png';
import contact from './assets/contact-us.png';
import pricing from './assets/pricing-plan.png';
import services from './assets/services.png';
import aboutus from './assets/about-us.png';

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);

    return (
        <div className='navContainer'>
            {isNavVisible && (
                <div className='sideNav'>
                   
                    <nav>
                        <li>
                        <a href='/WhoWeAre'>
                                <span><img src={aboutus}></img></span>
                                Who We Are
                        </a>
                        </li>
                        <li>
                        <a href='/Services'>
                                <span><img src={services}></img></span>
                                Services
                        </a>
                        </li>
                        <li>
                            <a href='/Pricing'>
                                <span><img src={pricing}></img></span>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href='/ContactUs' >
                            <span><img src={contact}></img></span>
                                Contact Us
                            </a>
                        </li>
                    </nav>
                </div>
            )}

            {/* Main Navigation */}
            <div className='nav'>
                <div className='navlogo'>
                    <a href='/'>
                        <img src={logo} alt='' className='logo' />
                    </a>
                </div>
                <img src={menu} alt='' className='menuimg' onClick={() => setNavVisible(!isNavVisible)} />
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
                <div className='social-links-nav'>
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
