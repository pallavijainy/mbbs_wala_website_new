import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import frame1 from "../assets/Frame 1.png";
import frame2 from "../assets/Frame 2.png";
import photo_1 from "../assets/photo_1.png";
import photo_2 from "../assets/photo_2.png";
import photo_3 from "../assets/photo_3.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import ExpertConsultation from "./ExpertConsultation";

const WhyChoose = () => {
  return (
    <div className="py-8 lg:py-20 bg-white">
      <h1 className="text-4xl md:text-5xl text-center font-semibold mb-10">
      What You
        <span className="font-bold"> Gain</span>
        <span className="text-[#0082FA] font-semibold"> by Choosing Us</span>?
      </h1>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto lg:gap-10 px-4 lg:px-0">
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img src={photo_2} alt="Doctor 1" className="lg:h-full lg:max-h-[500px] max-h-[200px] w-full object-contain rounded-lg" />
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-gray-600 leading-relaxed text-center px-8">
          With over 10 years of experience, we've mastered the intricacies
of medical admissions. Our seasoned professionals have in-depth knowledge of
NEET, applications, and the ever-changing landscape of medical education. We
know what it takes to win, and we're here to guide you every step of the way.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">
              Get Started
            </button>
            <button className="flex items-center gap-2  font-semibold px-6 py-3 border rounded-lg hover:bg-red-500 hover:text-white transition">
              Learn More
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
          <div className="flex sm:hidden items-center gap-5 justify-center">
            <div className="w-40 h-60 rounded-2xl overflow-hidden">
              <img src={card1} alt="10K Admissions" className="w-full h-full object-fill" />
            </div>
            <div className="w-40 h-60 rounded-2xl overflow-hidden">
              <img src={card2} alt="10K Admissions" className="w-full h-full object-fill" />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center gap-5">

            <div className="w-40 h-60 hidden sm:block rounded-2xl overflow-hidden">
              <img src={card1} alt="10K Admissions" className="w-full h-full object-fill" />
            </div>
            <div className="flex justify-center  lg:justify-start items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border border-gray-200 p-4 rounded-full shadow-sm w-72 lg:w-full">
                  <img src={frame1} alt="Student 1" className="w-12 h-12 rounded-full" />
                  <div className="text-gray-700 text-sm">
                    <p className="font-semibold">Rajat</p>
                    <p>Student</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 p-4 rounded-full shadow-sm">
                  <img src={frame2} alt="Student 2" className="w-12 h-12 rounded-full" />
                  <div className="text-gray-700 text-sm">
                    <p className="font-semibold">Rajat</p>
                    <p>Student</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-40 h-60 hidden sm:block rounded-2xl overflow-hidden">
              <img src={card2} alt="10K Admissions" className="w-full h-full object-fill" />
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:space-y-6 mt-5">
          <div className="w-full h-56 rounded-2xl overflow-auto">
            <img src={photo_3} alt="Doctor 2" className=" w-full h-full object-cover" />
          </div>
          <div className="w-full h-56 rounded-2xl overflow-auto">
            <img src={photo_1} alt="Doctor 2" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <ExpertConsultation />
      </div>
    </div>
  );
};

export default WhyChoose;
