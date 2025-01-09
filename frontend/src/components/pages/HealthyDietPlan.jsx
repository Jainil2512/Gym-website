import React from "react";
import "../styles/healthydietplan.css"
import { useNavigate } from "react-router-dom";

const HealthyDietPlan = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/");
  };

  return (
    <div className="wrapper">
      <h1 className="heading">HEALTHY DIET PLAN</h1>
      <p className="text">
        Get enrolled in our personalied daily food schedule, carefully crafted
        to your unique nutritional needs our comprehensive nutrition guides
        provides a calorie-based diet plan. by joining our program , you'll gain
        access to expert guidance, supportive community and the tools necessasry
        to transform your relationships with food and empower a healthier you !
      </p>
      <button className="details" onClick={HandleClick}>back</button>
    </div>
  );
};

export default HealthyDietPlan;
