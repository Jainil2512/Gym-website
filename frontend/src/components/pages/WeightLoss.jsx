import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/weightloss.css"

const WeightLoss = () => {
  const navigate = useNavigate();
 
   const HandleClick = () => {
     navigate("/");
   };

  return (
    <div className="wrapper">
      <h1 className="heading">WEIGHT LOSS PLAN</h1>
      <p className="text">
        Achieving your idealphysique requires a holistic approachto weight loss,
        encompossing wellness, lifestyle and eating habits with unwavering
        dedication and persistence. you'll unlock your full potential, revealing
        a stronger, learner and healthier version of yourself - Your dream
        physique.{" "}
      </p>
      <div className="list">
        <p className="list-heading">What does this program include ? </p>
          <ol>
           <li>1. A customized diet schedule</li>
            <li>2. Personalized Workout schedule</li>
            <li>3. Supplementation guide</li>
            <li>4. Exercise form and technique guide </li>
          </ol>
      </div>
      <button onClick={HandleClick}>back</button>
    </div>
  );
};

export default WeightLoss;
