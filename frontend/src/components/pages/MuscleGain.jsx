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
      <button onClick={HandleClick}>back</button>
    </div>
  );
};

export default MuscleGain;
