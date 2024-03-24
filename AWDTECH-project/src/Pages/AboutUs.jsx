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
    >
      <WhoWeAre/>
      <Landing/>
      <Carousel/>
      <Pricing/>
      <ContactUs/>
    </motion.div>
  )
}

export default AboutUs