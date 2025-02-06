import React from "react";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import g9 from "../assets/g9.png";

const Gallery = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured <span className="text-red-600">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className=" col-span-2 grid gap-5 sm:grid-cols-2 grid-cols-1">
            <div className="w-full  rounded-2xl">
              <img src={g2} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-full  rounded-2xl">
              <img src={g1} alt=""  className="w-full h-full object-cover"/>
            </div>
            <div className="w-full  rounded-2xl">
              <img src={g3} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-full  rounded-2xl">
              <img src={g4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className=" hidden md:block w-full md:h-60 lg:h-full rounded-2xl">
            <img src={g6} alt="" />
          </div>
          <div className=" hidden lg:grid gap-5 grid-cols-1">
            <div className="w-full h-44  rounded-2xl">
              <img src={g7} alt="" />
            </div>
            <div className="w-full h-44  rounded-2xl">
              <img src={g8} alt="" />
            </div>
          </div>
          <div className=" hidden md:h-60 h-44 md:col-span-2  shadow-md rounded-2xl">
            <img src={g5} alt="" />
          </div>
          <div className="hidden md:h-60 h-44 md:col-span-2  shadow-md rounded-2xl">
            <img src={g9} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
