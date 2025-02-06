import React from "react";

const ImageText = ({ image, heading, description }) => {
  return (
    <div className="flex items-center">
      <div>
        <img src={image} alt="" className="w-20 h-20" />
      </div>
        <div className="space-y-2">
          <p className="text-[#099250]">{heading}</p>
          <p className="text-[#202124]">{description}</p>
        </div>
    </div>
  );
};

export default ImageText;
