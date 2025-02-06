import React from "react";
import g1 from "../assets/g1.png";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { IoTime } from "react-icons/io5";
import { MdTimeline } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";


const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white">
      <h2 className="text-2xl font-bold">{course.price}</h2>
      <button className="w-full mt-4 border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100">
        Add To Cart
      </button>
      <button className="w-full mt-2 bg-[#59A164] text-white py-2 rounded-md hover:bg-green-600">Buy Now</button>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold">This course includes</h3>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4">
            <FaBookOpen/>
            Lectures{" "}
          </span>{" "}
          <span>{course.lectures}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4" >
            <IoTime />
            Duration{" "}
          </span>
          <span>{course.duration}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4">
            <SiHyperskill />
            Skills{" "}
          </span>
          <span>{course.skills}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4">
            <MdOutlineLanguage />
            Language{" "}
          </span>
          <span>{course.language}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4">
            <MdTimeline />
            Deadline{" "}
          </span>
          <span>{course.deadline}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex justify-center items-center gap-4">
            <AiFillSafetyCertificate />
            Certificate
          </span>
          <span>{course.certificate ? "Yes" : "No"}</span>
        </li>
      </ul>

      <hr className="my-4" />

      <div className="flex items-center gap-4">
        <img src={course.instructorImage || g1} alt="Instructor" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-bold underline">By {course.instructor}</p>
          <p className="text-sm text-gray-500">{course.instructorTitle}</p>
          <p className="text-yellow-500 flex items-center gap-1">
            ⭐⭐⭐⭐⭐ <span className="text-black">{course.rating}/5.0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
