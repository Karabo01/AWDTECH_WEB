import fb from './assets/fb.png'
import ig from './assets/ig.png'
import tw from './assets/tw.png'
import './css/Footer.css'

const Footer = () => {
    return (
      <div className="Footer">
        <div className='footer'>
            <ul className='footerNav'>
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
           
        </div>
        <div class="social-links-footer">
                <a href="https://www.facebook.com"><img src={fb} alt="Facebook"/></a>
                <a href="https://www.instagram.com/awdtech_?igsh=azc5dnA0bndnYzM1"><img src={ig} alt="Instagram"/></a>
                <a href="https://twitter.com"><img src={tw} alt="Twitter"/></a>
                
            </div>
      </div>
    );
  };

export default Footer;