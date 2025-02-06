import React from "react";
import ExpertImage from "../assets/ExpertImage.png"
import expert_2 from "../assets/expert_2.png"
import SlidingTextEffect from "./SlidingTextEffect";
import Accordion from "./Accordion";


const ExpertConsultation = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-8 items-center ">
      <div className="space-y-14">
        <h1 className="text-3xl md:text-4xl font-semibold">
        Get the Answers You Need  <span><SlidingTextEffect text={"with our Experts !"}/></span>
        </h1>
        
        <div className="mt-6">
          <img
            src={ExpertImage} 
            alt="Business Expert"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your mail"
            className="p-3 border rounded-md w-full"
          />
          <button className="p-3 bg-red-600 text-white rounded-full">
            ➤
          </button>
        </div>
        <p className="text-xl mt-2 text-[#808080]">
          We care about your data in our <span className="text-red-600">privacy policy</span>.
        </p>
      </div>
      <div className="h-full">
        <img src={expert_2} alt="" className="lg:w-full lg:h-full w-100 h-100"/>
      </div>
      <div className="space-y-10">
        <Accordion/>
      </div>
    </div>
  );
};

export default ExpertConsultation;
