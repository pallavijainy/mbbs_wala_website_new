import React from "react";
import image from "../assets/background_image.jpg";

const AdmissionSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-3xl lg:gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
          Get more information about MBBS Admission in Top private medical college
        </h2>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-200 transition">
            ← Back to top
          </button>
          <button
  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
  onClick={() => window.location.href = 'tel:+917880119983'}
>
  Consult now
</button>

        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center ">
        <img 
          src={image}
          alt="Medical students" 
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
        />
        <p className="text-gray-600 text-sm mt-4 px-4 md:px-0 text-center md:text-left max-w-lg">
          The first key is Goal Setting. Set clear, specific, and achievable goals that align with your passions and aspirations. These goals serve as a roadmap, guiding your actions and decisions towards your desired.
        </p>
      </div>
    </section>
  );
};

export default AdmissionSection;
