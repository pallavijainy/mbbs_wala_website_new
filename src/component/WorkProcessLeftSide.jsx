import React from "react";
import doctor_1 from "../assets/doctor_1.jpg";
import doctor_2 from "../assets/doctor_2.jpg";
import doctor_3 from "../assets/doctor_3.jpg";
import doctor_4 from "../assets/doctor_4.jpg";

const WorkProcessLeftSide = () => {
  return (
    <div className="flex flex-col gap-10">
      {[
        { image: doctor_1, letter: "M", word: "Mentorship" },
        { image: doctor_2, letter: "B", word: "Bridge" },
        { image: doctor_3, letter: "B", word: "Building" },
        { image: doctor_4, letter: "S", word: "Support" },
      ].map((item, index) => (
        <div key={index} className="group flex justify-start items-center text-3xl gap-6">
          <div
            className="relative flex justify-center items-center w-20 h-32 md:w-20 md:h-30 rounded-full shadow-lg object-cover overflow-hidden"
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "top" }}
          >
            <h1 className="absolute text-center font-bold text-7xl transition-transform duration-300 ease-in-out group-hover:scale-150">
              {item.letter}
            </h1>
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold">{item.word}</h1>
        </div>
      ))}
    </div>
  );
};

export default WorkProcessLeftSide;
