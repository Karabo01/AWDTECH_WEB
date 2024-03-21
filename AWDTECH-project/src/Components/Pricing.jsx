import React from 'react'
import PricingCard from "./PricingCard";
import './css/Pricing.css'
import { useState } from 'react'
const Pricing = () => {
    const [selectMonthly, setSelectMonthly] = useState(true);
    console.log(selectMonthly);
  return (
    <div>
        <div className='pricingSection'>
        <header>
            <h1 className="header-topic">Our Pricing Plan</h1>
            <div className="header-row">
              <p>Web Design</p>
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
              <p>Hosting</p>
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
          </div>
    </div>
  )
}

export default Pricing