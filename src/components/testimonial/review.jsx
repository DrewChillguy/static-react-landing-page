import React from "react";
import "./review.css";
import Lizar from "../../assets/Lizar.jpg";
import star from "../../assets/star.png";

const Review = () => {
  return (
    <div className="review">
      <div className="review-section">
        <h1>Review</h1>
        <h4>Feedback from our lovely customers</h4>
      </div>
      <div className="customer">
        <img src={Lizar} className="lizar" />
        <h4>
          "Prompt delivery, hot and delicious food, great portions.{<br />}{" "}
          Highly satisfied and will definitely order again!"
        </h4>
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
        <h3>Lizar</h3>
      </div>
    </div>
  );
};

export default Review;
