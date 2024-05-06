import { Carousel } from "../Components/Carousel";
import ContactUs from "../Components/ContactUs";
import Landing from "../Components/Landing";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import WhoWeAre from "../Components/WhoWeAre";
import {motion} from 'framer-motion'
const AboutUs = () => {
  return (
    <motion.div
    initial={{opacity:0 , y: 75}}
    animate={{opacity:1, y: 0}}
    exit={{opacity:0}} >
      <WhoWeAre/>
      <ContactUs/>
    </motion.div>
  )
}

export default AboutUs