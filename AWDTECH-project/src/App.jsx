import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import PricingCard from "./Components/PricingCard";
import "./Components/css/App.css";
// For Routing pages
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from "./Pages/Home"
// import Contact from "./Pages/ContactUs"
// import Pricing from "./Pages/Pricing"

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    //Routes
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Home/>}/>
    //       <Route path="/home" element={<Home/>}/>
    //       <Route path="/pricing" element={<Pricing/>}/>
    //       <Route path="/contactUs" element={<Contact/>}/>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div className="App">
      
      <div className="app-container">
      <Navbar/>
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Hosting</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Web Design</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "R110/pm" : "R2500"}
            storage={selectMonthly ? "5GB Storage" : "1 page"}
            users={selectMonthly? "25 users": "Responsive"}
            WebTraffic={selectMonthly? "Unlimited Web Traffic":"Unlimited Web Traffic"}
            
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "R150/pm" : "R3500"}
            storage={selectMonthly ? "10GB Storage" : "1-4 pages"}
            users={selectMonthly? "50 users": "Responsive"}
            WebTraffic={selectMonthly? "Unlimited Web Traffic":"Unlimited Web Traffic"}
            
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "R250/pm" : "R4500"}
            storage={selectMonthly ? "15GB Storage" : "1-10 pages"}
            users={selectMonthly? "75 users": "Responsive"}
            WebTraffic={selectMonthly? "Unlimited Web Traffic":"Unlimited Web Traffic"}

          />
        </div>
        <ContactUs/>
      </div>
    </div>
  );
}

export default App
