import React from "react";
import Navbar from "../layout/Navbar";
import Card from "../component/Card";
import girl from "../assets/girl.png";

const Courses = () => {
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
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
    <div>
      <div className="bg-[#F5F7FC] pt-4 rounded-3xl">
      <Navbar />

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F5F7FC] p-10">
        <div>
          <h1 className="text-2xl md:text-6xl lg:text-7xl">Explore the Best Courses for Your Future!</h1>
          <p className="text-md lg:text-2xl mt-2 lg:mt-10">Unlock endless possibilities with our expert guidance:</p>
          <div className="w-120 h-60 text-white mt-10 lg:block hidden">
            <div className=" h-30 w-full flex">
              <div className="w-60 "></div>
              <div className="w-30  bg-blue-800 flex text-center items-center">
                <p>Personalized Consultation</p>
              </div>
              <div className="w-30 "></div>
            </div>
            <div className="h-30 w-full flex">
              <div className="w-60 bg-black flex justify-center items-center">
                <p>Accredited Institutions</p>
              </div>
              <div className="w-30"></div>
              <div className="w-30 bg-white shadow-sm flex justify-center text-center items-center">
                <p className="text-black">College Comparisons</p>
              </div>
            </div>
          </div>

          <div className="block lg:hidden mt-6 lg:mt-10 space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1"></div>
              <div className="bg-blue-800 text-white p-4 text-center rounded-md flex-1 min-w-[150px]">
                Personalized Consultation
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-black text-white p-4 text-center rounded-md flex-1 min-w-[150px]">
                Accredited Institutions
              </div>
              <div className="flex-1"></div>
              <div className="bg-white shadow-sm p-4 text-black text-center rounded-md flex-1 min-w-[150px]">
                College Comparisons
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#3442D9] xl:block hidden w-70 h-70 absolute bottom-0 right-0"></div>
          <img src={girl} alt="" className="lg:h-150 lg:w-150 relative z-10" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {CollegeList.map((college) => (
          <Card key={college.id} redirect="/coursedetail" {...college} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
