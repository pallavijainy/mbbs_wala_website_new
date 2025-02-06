import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ id, redirect, image, title, time, badge, levelColor, description, teacher, teacherimage }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-lg shadow-md space-y-3 overflow-hidden p-4"  onClick={() => navigate(`/${id}${redirect}`)}>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <span className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 rounded">{time}</span>
      </div>

      <span className={`block text-sm font-semibold ${levelColor}`}>{badge}</span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img src={teacherimage} alt={teacher} className="w-full h-full object-cover" />
          </div>
          <span className="ml-2 text-sm text-gray-600">{teacher}</span>
        </div>
        <button
          className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
         
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
