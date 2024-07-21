import React from "react";
import "./work.css";
import pickMeal from '../../assets/pick-meals-image.png'
import choose from '../../assets/choose-image.png'
import delivery from '../../assets/delivery-image.png'

const Work = () => {
  return (
    <div className="how-it-work">
      <div className="work-section">
        <div className="work-title">
          <h1>How It Works</h1>
        </div>
        <div className="work-detail">
          <h4>
          Select your meals online, place your order, and make a secure payment.{<br/>} Our chefs prepare your food fresh, and our delivery team ensures it{<br/>} reaches your doorstep quickly and hot.
          </h4>
        </div>
      </div>
      <div className="cards-section">
        <div className="card">
            <img src={pickMeal} />
            <h3>Pick Meals</h3>
        </div>
        <div className="card">
            <img src={choose} />
            <h3>One Click Pay</h3>
        </div>
        <div className="card">
            <img src={delivery} />
            <h3>Fast Deliveries</h3>
        </div>
      </div>
    </div>
  );
};

export default Work;
