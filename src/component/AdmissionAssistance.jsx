import { IoSearch, IoSearchCircle } from "react-icons/io5";
import college_1 from "../assets/colege_1.png";
import college_2 from "../assets/college_2.png";
import { GoPerson } from "react-icons/go";
const colleges = [
  {
    id: 1,
    type: "Government Medical",
    description:
      "Secure your seat in top government medical colleges with expert guidance on eligibility, entrance exams, and documentation.",
    image: college_1,
    icon: <IoSearch color="white"/>
    ,
  },
  {
    id: 2,
    type: "Private Medical College",
    description:
      "Explore the best private medical colleges with personalized assistance in selecting colleges that fit your budget and preferences.",
    image: college_2,
    icon: <GoPerson color="white"/>,
  },
  {
    id: 3,
    type: "Government Medical",
    description:
      "Secure your seat in top government medical colleges with expert guidance on eligibility, entrance exams, and documentation.",
    image: college_2,
    icon: <IoSearch color="white"/>,
  },
  {
    id: 4,
    type: "Private Medical College",
    description:
      "Explore the best private medical colleges with personalized assistance in selecting colleges that fit your budget and preferences.",
    image: college_2,
    icon: <GoPerson color="white"/>,
  },
  {
    id: 5,
    type: "Government Medical",
    description:
      "Secure your seat in top government medical colleges with expert guidance on eligibility, entrance exams, and documentation.",
    image: college_2,
    icon: <IoSearch color="white"/>
  },
  {
    id: 6,
    type: "Private Medical College",
    description:
      "Explore the best private medical colleges with personalized assistance in selecting colleges that fit your budget and preferences.",
    image: college_2,
    icon: <GoPerson color="white"/>,
  },
  {
    id: 7,
    type: "Government Medical",
    description:
      "Secure your seat in top government medical colleges with expert guidance on eligibility, entrance exams, and documentation.",
    image: college_2,
    icon: <IoSearch color="white"/>
  },
  {
    id: 8,
    type: "Private Medical College",
    description:
      "Explore the best private medical colleges with personalized assistance in selecting colleges that fit your budget and preferences.",
    image: college_2,
    icon: <GoPerson color="white"/>,
  },
];

export default function AdmissionAssistance() {
  return (
    <div className="max-w-4xl mx-auto ">
      {colleges.map((college) => (
        <div key={college.id} className="flex items-start space-x-4 bg-white rounded-lg overflow-hidden lg:pl-4 ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <span className="text-xl">{college.icon}</span>
            </div>
            <div className="w-0.5 md:h-[35vh] min-h-[25vh] bg-slate-200"></div>
          </div>

          <div className="flex-1 space-y-3">
            <img src={college.image} alt={college.type} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="mt-2 text-lg font-semibold">
              <span className="text-blue-600 font-bold">{college.type}</span> Admission Assistance
            </h2>
            <p className="text-gray-600 text-sm mt-1">{college.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
