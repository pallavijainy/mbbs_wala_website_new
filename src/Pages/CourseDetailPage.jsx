import React from "react";
import Navbar from "../layout/Navbar";
import InstituteDetailPage from "../component/InstituteDetailPage";
import CoursesTable from "../component/CouseTable";
import SeatIntakeTable from "../component/SeatIntakeTable";
import CutOffTable from "../component/CutOffTable";
import TableComponent from "../component/TableComponent";

const NIRF_REPORT_TABLE_HEADING = ["Courses", "Students Placed", "Median Package"];
const NIRF_PACKAGES = [
  { title: "B.Tech", student_placed: 496, inr: "INR16.63 LPA" },
  { title: "M.Tech", student_placed: 496, inr: "INR16.63 LPA" },
  { title: "B.Tech + M.Tech", student_placed: 496, inr: "INR16.63 LPA" },
];
const heading = ["Particulars", " IIT Madras MBA Placement 2024 Stastics"];
const packages = [
  { title: "Highest Package", inr: "INR29.65 LPA" },
  { title: "Average Package", inr: "INR29.65 LPA" },
  { title: "Top 25% Average CTC", inr: "INR29.65 LPA" },
  { title: "Median Package", inr: "INR29.65 LPA" },
  { title: "Placement Percentage", inr: "100%" },
];
const CourseDetailPage = () => {
  return (
    <div>
      <Navbar />
      <InstituteDetailPage />
      <CoursesTable />
      <SeatIntakeTable />
      <CutOffTable />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">IIT Madras Placements 2024</h2>

        <p className="text-[#4D5156]">
          IIT Madras Placements 2024 is ongoing and the final placement report will be made available at the end of July
          2024. However, the IIT Chennai MBA placements 2024 are concluded and 100% of MBA students have been placed.
          The highest package of IIT Madras 29.65 LPA and the average package is INR 16.93 LPA for the MBA (2024) batch.
        </p>
        <p className="mt-3  mb-8 text-[#4D5156]">
          According to the NIRF 2024 report, IIT Madras's median package for B.Tech is INR 16.63 Lakhs per annum and the
          median salary for M.Tech is INR 15 LPA. The median package for B.Tech-M.Tech dual degree was INR 17 LPA during
          the placements in 2023. 
        </p>

        <TableComponent heading={heading} packages={packages} />

        <h4 className="mt-8 mb-8 text-[#4D5156]">
          The below table highlights the  <span className="text-[#236BDE]">IIT Madras placement</span> statistics based
          on the NIRF Report 2024: 
        </h4>
        <TableComponent heading={NIRF_REPORT_TABLE_HEADING} packages={NIRF_PACKAGES} />
      </div>
    </div>
  );
};

export default CourseDetailPage;
