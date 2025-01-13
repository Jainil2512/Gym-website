 //import { Check } from "lucide-react";
import React from "react";
import { Link} from "react-router-dom";


const Pricing = () => {
  const pricing = [
    {
      
      title: "HEALTHY DIET PLAN",
      price: 1599,
      length: 12,
      redirect_url: "/HealthyDietPlan",
    },
    {
      //imgUrl: "/pricing.jpg",
      title: "WEIGHT LOSS ",
      price: 1599,
      length: 12,
      redirect_url: "/WeightLoss",
    },
    {
      //imgUrl: "/pricing.jpg",
      title: "PEARSONAL TRAINING ",
      price: 9499,
      length: 12,
      redirect_url: "/PersonalTraining",
    },
    {
      title:"MUSCLE GAIN",
      price:1599,
      length:12,
      redirect_url: "/MuscleGain",
    }
  ];

  //const handleLinkClick = (url) => { window.open(url, "_blank", "noopener,noreferrer"); };
  return (

    <section className="pricing">
      <h1>OUR FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <div className="title">
                <h1>{element.title}</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} WEEKS</p>
              </div>
               <div className="description">
                <Link to={element.redirect_url}>View details</Link>
                {/*<button onClick={() => handleLinkClick(element.redirect_url)}> View details </button>*/}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;




