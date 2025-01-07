 import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      
      title: "HEALTHY DIET PLAN",
      price: 2599,
      length: 12,
    },
    {
      //imgUrl: "/pricing.jpg",
      title: "WEIGHT LOSS ",
      price: 1599,
      length: 12,
    },
    {
      //imgUrl: "/pricing.jpg",
      title: "PEARSONAL TRAINING ",
      price: 9499,
      length: 12,
    },
    {
      title:"MUSCLE GAIN",
      price:1599,
      length:12,
    }
  ];
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
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> All Day Fre Training
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option
                </p>
                <Link to={"/"}>View details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

{/*import React from 'react'
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className='wrapper'>
      <h1>OUR FITNESS PLANS</h1>
      <div className='box'>
        <div className="title">
        <h2>HEALTHY DIET PLAN</h2>
        <h3>2599</h3>
        <p>12 weeks</p>
        </div> 
        <Link to={"/"}>View details</Link>
      </div>
      <div className='box'>
      <div className="title">
        <h2>HEALTHY DIET PLAN</h2>
        <h3>2599</h3>
        <p>12 weeks</p>
        </div> 
        <Link to={"/"}>View details</Link>
      </div>
      <div className='box'>
      <div className="title">
        <h2>HEALTHY DIET PLAN</h2>
        <h3>2599</h3>
        <p>12 weeks</p>
        </div> 
        <Link to={"/"}>View details</Link>
      </div>
      <div className='box'>
      <div className="title">
        <h2>HEALTHY DIET PLAN</h2>
        <h3>2599</h3>
        <p>12 weeks</p>
        </div> 
        <Link to={"/"}>View details</Link>
      </div>
      
    </div>
  )
}

export default Pricing*/
}

