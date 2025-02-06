import React from "react";
import { FaStar, FaGlobe } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { MdUpdate } from "react-icons/md";
import CourseDescription from "./CouseDescription";
import Curriculum from "./Curriculam";
import FAQSection from "./FaqSection";

const CouseDetail = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-2xl">
       
        <p className="lg:mt-2 line-clamp-2">
          Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in
          equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial
          in do.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-4 ">
          <div className="flex items-center gap-1">
            <FaStar className="" /> 4.5/5.0
          </div>
          <div className="flex items-center gap-1">
            <FiBookOpen /> 12k Enrolled
          </div>
          <div className="flex items-center gap-1">
            <FiBookOpen /> All levels
          </div>
          <div className="flex items-center gap-1">
            <MdUpdate /> Last updated 09/2021
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe /> English
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-6 relative">
        <video
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    controls
    className="w-full lg:h-96 object-cover rounded-lg"
    poster="/mnt/data/thumbnail.png" // Optional: A preview image before playing
  ></video>
        </div>
      </div>
      <CourseDescription/>
      <Curriculum/>
      <FAQSection/>
    </div>
  );
};

export default CouseDetail;
