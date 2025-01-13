import React from "react";
import "../styles/healthydietplan.css";
import { useNavigate } from "react-router-dom";
//import { Check } from "lucide-react";

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
      <div className="list">
        <p className="list-heading">What does this program include ? </p>
          <ol>
           <li>1. A customized diet schedule</li>
            <li>2. Personalized Workout schedule</li>
            <li>3. Supplementation guide</li>
            <li>4. Exercise form and technique guide </li>
          </ol>
      </div>
      <button className="details" onClick={HandleClick}>
        back
      </button>
    </div>
  );
};

export default HealthyDietPlan;
