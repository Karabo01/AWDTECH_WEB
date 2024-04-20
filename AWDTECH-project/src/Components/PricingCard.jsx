import React from 'react';
import './css/PricingCard.css'

const PricingCard = ({ title, price, storage, users, WebTraffic, Maintenance }) => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
      <div className="PricingCard">
        <header>
          <p className="card-title">{title}</p>
          <h1 className="card-price">{price}</h1>
        </header>
        {/* features here */}
        <div className="card-features">
          <div className="card-storage">{storage}</div>
          <div className="card-users-allowed">{users}</div>
          <div className="card-send-up">{WebTraffic}</div>
          <div className="card-send-up">{Maintenance}</div>
        </div>
        <button className="card-btn" onClick={scrollToBottom}>Get in Touch</button>
      </div>
    );
};

export default PricingCard;