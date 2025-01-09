import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pt.css"

const PersonalTraining = () => {
  const navigate = useNavigate();
 
   const HandleClick = () => {
     navigate("/");
   };

  return (
    <div className="wrapper">
      <h1 className="heading">PERSONAL TRAINING</h1>
      <p className="text">
        Kickstart Your Fitness Journey with Our 24-Week Transformation Program{" "}
      </p>
      <span></span>
      <p className="text">
        Our comprehensive program includes:<span></span>
        Customized diet plans tailored to your needs Structured workout
        schedules for optimal results Expert supplementation advice
      </p>
      <span></span>
      <p className="text">
        Stay accountable and motivated with regular check-ins and consultations
        via Whatsapp or Google Meet.
      </p>
      <span></span>
      <p className="text">Join now and transform your body in just 24 weeks!</p>
      <button onClick={HandleClick}>back</button>
    </div>
  );
};

export default PersonalTraining;
