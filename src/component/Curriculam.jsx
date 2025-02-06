import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const dummyData = [
  {
    category: "Introduction of Digital Marketing",
    lectures: [
      { title: "Introduction", duration: "10m 56s", type: "free" },
      { title: "What is Digital Marketing", duration: "10m 56s", type: "free" },
      { title: "Type of Digital Marketing", duration: "10m 56s", type: "premium" },
    ],
  },
  {
    category: "Customer Life Cycle",
    lectures: [
      { title: "What is Digital Marketing", duration: "10m 56s", type: "free" },
      { title: "15 Tips for Writing Magnetic Headlines", duration: "10m 56s", type: "free" },
      { title: "How to Write Like Your Customers Talk", duration: "10m 56s", type: "premium" },
      { title: "How to Flip Features Into Benefits", duration: "10m 56s", type: "premium" },
    ],
  },
  {
    category: "What is Search Engine Optimization(SEO)",
    lectures: [
      { title: "How to SEO Optimise Your Homepage", duration: "10m 56s", type: "free" },
      { title: "How to Write Title Tags Search Engines Love", duration: "10m 56s", type: "free" },
      { title: "SEO Keyword Planning", duration: "10m 56s", type: "free" },
      { title: "Internal and External Links", duration: "10m 56s", type: "free" },
      { title: "Measuring SEO Effectiveness", duration: "10m 56s", type: "free" },
    ],
  },
  {
    category: "Advanced Digital Marketing",
    lectures: [
      { title: "Advanced Strategies for PPC", duration: "12m 30s", type: "premium" },
      { title: "How to Build Backlinks", duration: "11m 45s", type: "free" },
      { title: "Conversion Rate Optimization", duration: "13m 20s", type: "premium" },
    ],
  },
];

export default function Curriculum() {
  const [visibleSections, setVisibleSections] = useState(2);

  return (
    <div className="mx-auto mt-4  border lg:mt-10 shadow-lg">
      <h2 className="text-3xl font-bold lg:mb-4 p-2 lg:p-6">Curriculum</h2>
      <hr className="mb-4 p-0" />
      {dummyData.slice(0, visibleSections).map((section, index) => (
        <div key={index} className="mb-4 p-4">
          <h3 className="font-semibold text-lg">
            {section.category} ({section.lectures.length} lectures)
          </h3>
          <div className="mt-2 space-y-2">
            {section.lectures.map((lecture, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between p-2 rounded-md">
                  <div className="flex items-center space-x-2">
                    {lecture.type === "premium" ? (
                      <span className="bg-[#D9D9D9] p-2 rounded-full"><MdLock/></span>
                    ) : (
                      <span className="bg-[#C94C1B4F] p-2 rounded-full">
                        <FaPlay color="#BD1C1C" />
                      </span>
                    )}
                    <div className="flex flex-col">
                    <span className="font-semibold">{lecture.title}</span>
                    <span className="text-gray-500 text-sm">{lecture.duration}</span>
                    </div>
                    

                  </div>
                  <div className="flex items-center space-x-2">
                    {lecture.type === "premium" ? (
                      <button className="bg-[#FF9D5B] text-white px-3 py-1 lg:px-8 lg:py-3 rounded-md">Premium</button>
                    ) : (
                      <button className="bg-[#59A164] text-white px-3 py-1 lg:px-8 lg:py-3 rounded-md">Play</button>
                    )}
                  </div>
                </div>
                {idx !== section.lectures.length-1 && (<hr className="m-4"/>)}  
              </div>
            ))}
          </div>
        </div>
      ))}
      {visibleSections < dummyData.length && (
        <div className="text-center mt-4">
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => setVisibleSections(visibleSections + 1)}
          >
            See More Video ⬇️
          </button>
        </div>
      )}
    </div>
  );
}
