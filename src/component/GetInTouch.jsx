import React from "react";
import Contact from "../assets/Contact.png";
import phone from "../assets/phone.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const GetInTouch = () => {
  return (
    <section className="lg:py-12 px-2 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-5xl font-bold lg:mb-10">Get in touch</h2>
          <p className="text-gray-600 mb-6 lg:text-xl">Our friendly team would love to hear from you!</p>

          <div className="flex items-center gap-4 mb-4 lg:mb-8 lg:mt-8">
            <div>
              <div className="w-12 h-12 lg:w-24 lg:h-24 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src={phone}
                  alt="Ritesh Sir"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-md lg:text-xl">Ritesh Sir</h3>
              <p className="text-gray-500 text-sm lg:text-md">Admission Counselor</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-4 lg:space-y-10 mt-4 lg:mt-10">
            <div className="flex items-center gap-4">
              <CiMail color="red" size={24} />
              <a href="mailto:info@mbbswala.in" className="text-[#808080] hover:underline text-sm lg:text-lg">
                info@mbbswala.in
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone color="red" size={24} />

              <a href="tel:+916266636705" className="text-[#808080] hover:underline text-sm lg:text-lg">
                +91-7880119983
              </a>
              <a href="tel:+916266636705" className="text-[#808080] hover:underline text-sm lg:text-lg">
                +91-9713315529
              </a>
            </div>

            <div className="flex items-center gap-4">
              <IoLocationOutline color="red" size={24} />

              <p className="text-[#808080] text-left text-sm lg:text-lg">Sf 17, Aakriti Business Centre, Salaiya, Bhopal, (MP), 462026</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-lg p-4 w-full">
            <div className="">
              <img src={Contact} alt="Counselor" className="lg:w-full w-100 h-120 lg:h-120 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
