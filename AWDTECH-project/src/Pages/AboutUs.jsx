import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import WhoWeAre from "../Components/WhoWeAre";
import {motion} from 'framer-motion'
const AboutUs = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <WhoWeAre/>
      {/* <Service/>
       <Pricing/>
      <ContactUs/>  */}
    </motion.div>
  )
}

export default AboutUs