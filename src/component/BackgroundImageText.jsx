import React from "react";
import doctor_1 from "../assets/doctor_1.jpg";
import doctor_2 from "../assets/doctor_2.jpg";
import doctor_3 from "../assets/doctor_3.jpg";
import doctor_4 from "../assets/doctor_4.jpg";
import doctor_5 from "../assets/doctor_5.jpg";

const BackgroundImageText = ({color}) => {
  const data = [
    { image: doctor_5, heading: "M" },
    { image: doctor_2, heading: "B" },
    { image: doctor_3, heading: "B" },
    { image: doctor_4, heading: "S" },
  ];
  return (
    <div className="flex gap-5">
    {data?.map((el) => (
  <div
    key={el.id} 
    className="h-30 w-20 rounded-full overflow-hidden flex items-center justify-center relative"
    style={{
      backgroundImage: `url(${el.image})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      position: "relative",
    }}
  >
    <div className="absolute inset-0 bg-gray-800 opacity-20 backdrop-blur-sm"></div>

    <h1 className={`lg:text-8xl text-7xl font-bold text-${color} relative z-10`}>
      {el.heading}
    </h1>
  </div>
))}

    </div>
  );
};

export default BackgroundImageText;
