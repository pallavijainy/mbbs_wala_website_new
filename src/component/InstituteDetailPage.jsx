import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import img_1 from "../assets/img_1.gif";
import img_2 from "../assets/img_2.gif";
import img_3 from "../assets/img_3.gif";
import img_4 from "../assets/img_4.gif";
import ImageText from "./ImageText";

const InstituteDetailPage = () => {
  return (
    <div className="mx-auto lg:p-6">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-8xl font-bold">
        Indian Institute of Technology - <span className="text-blue-600">Madras</span>
      </h1>
      <p className="text-gray-600 mt-2 lg:text-xl text-lg">
        (Admission 2025, Cutoff, Courses, Fees, Placement, Ranking)
      </p>

      <div className="lg:mt-10 mt-5 flex lg:flex-row flex-col justify-between">
        <div>
          <p className="text-[#4D5156]"> Eligibility</p>
          <p className="font-semibold">10+2 with 75% + JEE Advanced</p>
        </div>
        <div>
          <p className="text-[#4D5156]"> Application Date:</p>
          <p className="text-[#099250]">27 Apr - 18 Jun 2024</p>
        </div>
        <div className="flex items-center space-x-4 mt-6">
          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#1F3152] text-[#1F3152] rounded-full">
            <span>Brochure</span>
            <MdOutlineFileDownload size={20} />
          </div>
          <div className="flex justify-center items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 border border-[#FFA100] text-[#FFA100] rounded-full">
            <span>Apply Now</span>
            <IoIosArrowDropright size={20} />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6">Insights Based on NIRF Ranking 2024</h2>

      <div className="flex lg:flex-row flex-col justify-between mt-5">
        <ImageText image={img_1} heading={"Male: 2739          |    Female: 701"} description={"Student Intake (3440)"} />
        <ImageText image={img_2} heading={"$1663440"} description={"Median Salary"} />
        <ImageText image={img_3} heading={"79%"} description={"Passing %"} />
        <ImageText image={img_4} heading={"62%"} description={"Placement %"} />
      </div>

      <div className="flex lg:flex-row flex-col justify-end space-x-4 text-gray-600 mt-10 space-y-5">
        <span>📍 Chennai, Tamil Nadu</span>
        <span>🏛️ Autonomous University</span>
        <span>📅 Estd 1959</span>
      </div>
    </div>
  );
};

export default InstituteDetailPage;
