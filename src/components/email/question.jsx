import React from "react";
import "./question.css";

const Question = () => {
  return (
    <div className="question">
      <h1>Have Question In Mind?{<br />} Let Us Help You</h1>
      <div className="submit-btn">
        <input type="text" placeholder="yourmail@gmail.com"/>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};

export default Question;
