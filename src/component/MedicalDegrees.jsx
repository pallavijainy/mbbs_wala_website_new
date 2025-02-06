import React from "react";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const MedicalDegrees = ({ heading, subHeading, description, redirect ,redirectMore}) => {
  const navigate = useNavigate()
  const CollegeList = [
    {
      id: 1,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "AIIMS Delhi",
      description:
        " A top-ranked medical college with a strong reputation for academics, research, and infrastructure.",
      time: "01 hr 12 mins",
      rating: "4.3",
      reviews: "(1,253)",
      teacher: "Jane Cooper",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      badge: "Intermediate",
      levelColor: "text-yellow-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "3.9",
      reviews: "(823)",
      teacher: "Jenny Wilson",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      badge: "Advanced",
      levelColor: "text-green-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,251)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,253)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1617135042790-7f8c4ea4d4d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold uppercase text-gray-500 tracking-wider">{heading}</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-1 leading-tight">
          Our Most <span className="text-red-500">Popular</span> {subHeading}
        </h1>
        <p className="text-gray-600 mt-2 text-base">{description}</p>
      </div>

      <div className="flex items-center gap-3 group cursor-pointer transition-all" onClick={()=>navigate(`${redirectMore}`)}>
        <h1 className="text-lg font-semibold text-gray-700 group-hover:text-red-500 transition-all">See More</h1>
        <div className="p-2 bg-gray-200 rounded-full transition-all group-hover:bg-red-500 group-hover:text-white">
          <FaArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CollegeList.map((college) => (
            <Card key={college.id} redirect={redirect} {...college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalDegrees;
