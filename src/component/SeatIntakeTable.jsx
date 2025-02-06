import React from "react";

const seatIntakeData = [
  { branch: "Aerospace Engineering", intake: 62 },
  { branch: "Chemical Engineering", intake: 114 },
  { branch: "Civil Engineering", intake: 121 },
  { branch: "Computer Science and Engineering", intake: 81 },
  { branch: "Electrical Engineering", intake: 148 },
  { branch: "Engineering Physics", intake: 37 },
  { branch: "Biological Engineering", intake: 42 },
  { branch: "Mechanical Engineering", intake: 183 },
  { branch: "Metallurgical and Materials Engineering", intake: 62 },
  { branch: "Naval Architecture and Ocean Engineering", intake: 69 },
];

const SeatIntakeTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        IIT Madras B.Tech Seat Intake 2024
      </h2>
      <p className="text-[#4D5156] mb-4">Candidates can check the table below to know the IITM seat intake for various B.Tech branches based on JoSAA counselling:</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#1F3152] text-white">
            <tr>
              <th className="py-2 px-4 text-left border border-[#CCDCFF]">Branch</th>
              <th className="py-2 px-4 text-left border border-[#CCDCFF]">Seat Intake</th>
            </tr>
          </thead>
          <tbody className="text-[#4D5156]">
            {seatIntakeData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 border border-[#CCDCFF]">{item.branch}</td>
                <td className="py-2 px-4 border border-[#CCDCFF]">{item.intake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatIntakeTable;
