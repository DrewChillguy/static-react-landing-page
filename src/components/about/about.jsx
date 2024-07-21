import React from "react";
import "./about.css";
import orangeBg from "../../assets/about-background.png";
import salad from "../../assets/about-background-image.png";
import play from "../../assets/Vector.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about">
        <img src={salad} className="veggies" />
        <div className="about-detail">
          <h1>
            Food Is An Important {<br />}Part Of A Balanced{<br />} Diet
          </h1>
          <h4>
            Vegetables, fruits, proteins, and sometimes grains. {<br />}Commonly
            dressed with vinaigrettes or creamy dressings, {<br />}salads can be
            served cold or warm.
          </h4>
          <h4>
            Feel free to explore and ask questions. Let's make your experience
            enjoyable and informative!
          </h4>
          <button className="learn-more">Learn more</button>
          <button className="play">
            <img src={play} />
            <p className="watch">Watch Video</p>
          </button>
        </div>
      </div>
      <img src={orangeBg} className="orange-bg" />
    </div>
  );
};

export default About;
