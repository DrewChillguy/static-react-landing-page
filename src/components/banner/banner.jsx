import React from "react";
import orangeBg from "../../assets/home-banner-background.png";
import "./banner.css";
import salad from "../../assets/home-banner-image.png";
import arrow from '../../assets/arrow.png'

const Banner = () => {
  return (
    <div className="banner-section">
      <img src={orangeBg} alt="" className="orangeBg" />
      <div className="banner">
        <div>
          <h1>
            Your Favourite Food Delivered Hot &{<br />}
            Fresh
          </h1>
          <h4>
            Healthy switcher chefs do all the prep work, like{<br />} peeding, chopping
            & marinating, so you can cook{<br />} a fresh food.
          </h4>
          <button className="order-now">Order Now
            <img src={arrow} className="arrow"/>
          </button>
        </div>
      </div>
      <img src={salad} alt="salad" className="salad" />
    </div>
  );
};

export default Banner;
