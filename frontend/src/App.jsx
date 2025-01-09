import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import HealthyDietPlan from "./components/pages/HealthyDietPlan";
import MuscleGain from "./components/pages/MuscleGain";
import PersonalTraining from "./components/pages/PersonalTraining";
import WeightLoss from "./components/pages/WeightLoss";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <Hero />
              <Gallery />
              <Pricing />
              <Contact />
              <Footer />
              <ToastContainer theme="dark" position="top-center" />
            </React.Fragment>
          }
        />

        <Route path="/HealthyDietPlan" element={<HealthyDietPlan />} />
        <Route path="/MuscleGain" element={<MuscleGain />} />
        <Route path="/PersonalTraining" element={<PersonalTraining />} />
        <Route path="/WeightLoss" element={<WeightLoss />} />
      </Routes>
    </Router>
  );
};

export default App;
