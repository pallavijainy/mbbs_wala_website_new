import React from "react";
import Navbar from "../layout/Navbar";
import g1 from "../assets/g1.png";
import CourseCard from "../component/CourseCard";
import CouseDetail from "../component/CouseDetail";



const InstitutionDetailPage = () => {
    const courseDetail = {
        price: 295.55,
        lectures: 30,
        duration: "4h 50m",
        skills: "Beginner",
        language: "English",
        deadline: "Nov 30 2021",
        Certificate: "Yes",
        image: g1,
        instructor: "Jacqueline Miller",
        instructorTitle: "Eduport Company",
        rating: 4.5,
      };
  return (
    <div>
   <Navbar/>

    <div className="flex lg:flex-row flex-col lg:gap-20 lg:mt-5">
      <div className="lg:w-[70%] w-full">
        <h2 className="text-2xl lg:text-5xl font-bold p-2 line-clamp-2">
          The Complete Digital Marketing Course - 12 Courses in 1
        </h2>

        <CouseDetail />
      </div>
      <div className="lg:w-[30%] w-full lg:sticky top-7 h-fit">
        <CourseCard course={courseDetail} />
      </div>
    </div>
  </div>
  )
}

export default InstitutionDetailPage
