import React from "react";

const courses = [
  {
    course: "B. Tech",
    eligibility: "Passed 10+2 (PCM) from a recognised board with a minimum of 75% marks",
    selection: "JEE Main + JoSAA Counseling",
    fees: "INR 2.15 lakhs",
  },
  {
    course: "M.Tech",
    eligibility: "Passed in B.E/B.Tech/equivalent degree in the relevant stream with at least 60% aggregate marks for the general category",
    selection: "GATE Score + COAP Counselling",
    fees: "INR 24,600",
  },
  {
    course: "M.Sc",
    eligibility: "Bachelor’s degree in respective discipline with minimum 55% aggregate marks",
    selection: "IIT JAM + JOAPS Counselling",
    fees: "INR 20,400",
  },
  {
    course: "MBA",
    eligibility: "Bachelor’s degree in Engineering /Technology/ Architecture /Pharmacy / B.Sc. Agri. Engg. (Minimum 4 year after 10+2) with at least 60% marks OR Master’s degree in any relevant branch with a minimum of 60% marks",
    selection: "CAT + Group Discussion + Interview Round",
    fees: "INR 4.46 Lakhs",
  },
  {
    course: "Ph.D.",
    eligibility: "M.E/M.Tech or MD degree with at least 60% (55% for SC/ST/PH) marks in aggregate OR 60% (55% for SC/ST/PH) marks in MBBS/M.Sc/MBA/MA OR Minimum 70% marks in B.E/B.Tech",
    selection: "GATE/UGC-NET/CSIR-NET/ICAR or ICMR score OR Written Test and Interview",
    fees: "INR 15,650",
  },
];

const CoursesTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">IIT Madras Courses & Fees</h2>
      <p className="text-[#4D5156]">IIT Madras offers more than <span className="text-[#236BDE]">100 courses</span> through undergraduate, postgraduate, and research degrees. The courses  are  streams of Engineering, Sciences, Humanities, and Management. Admission to these courses is based on national-level exam such as JEE
Advanced, GATE, and IIT JAM. Below is a brief overview of IIT Madras courses along with their eligibility criteria, selection  and tuition
fees:</p>
      <div className="overflow-x-auto mt-10 rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-[#1F3152] text-white">
              <th className="py-2 px-4 border border-[#CCDCFF]">Course</th>
              <th className="py-2 px-4 border border-[#CCDCFF]">Eligibility</th>
              <th className="py-2 px-4 border border-[#CCDCFF]">Selection Criteria</th>
              <th className="py-2 px-4 border border-[#CCDCFF]">Fees (First Year)</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, index) => (
              <tr key={index} className="border border-[#CCDCFF] hover:bg-gray-100">
                <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{item.course}</td>
                <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{item.eligibility}</td>
                <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{item.selection}</td>
                <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{item.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;
