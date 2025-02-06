import React from "react";

const TableComponent = ({ heading, packages }) => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-[#1F3152] text-white">
        <tr>
          {heading?.map((el) => (
            <th className="py-2 px-4 text-left border border-[#CCDCFF] ">{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {packages?.map((el, i) => (
          <tr className="border border-[#CCDCFF] hover:bg-gray-100">
            {el.title && <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{el.title}</td>}
            {el.student_placed && <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{el.student_placed}</td>}
            {el.inr && <td className="py-2 px-4 border border-[#CCDCFF] text-[#4D5156]">{el.inr}</td>}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;
