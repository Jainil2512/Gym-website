import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/musclegain.css"

const MuscleGain = () => {
  const navigate = useNavigate();
 
   const HandleClick = () => {
     navigate("/");
   };

  return (
    <div className="wrapper">
      <h1 className="heading">MUSCLE GAIN</h1>
      <p className="text">
        To achieve your ideal physique,it’s essential to focus on progressive
        overload , consistently challenging your muscles leading to an athletic
        appearance that shows your hard work and commitment.
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

export default MuscleGain;
