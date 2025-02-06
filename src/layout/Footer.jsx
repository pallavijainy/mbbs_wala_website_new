import React from "react";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="jostFont bg-gray-50 pt-5 px-5 md:px-8 lg:px-16 rounded-2xl mb-10  max-w-[90rem] mx-auto">
      <div className="w-full max-w-5xl mx-auto">
        <div className="  space-y-3 text-center pb-5">
          <h2 className="text-lg md:text-xl lg:text-3xl text-blue-500 font-semibold">Get more information</h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium">About MBBS Admission in Top Medical College</p>
          <a href="tel:+917880119983">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer">
              Consult now
            </button>
          </a>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-5 border-t pb-5 border-[#0005] ">
          <div className="text-center md:text-left">
            <img src={logo} alt="Logo" className="mx-auto md:mx-0 mb-4 md:mb-0" />
            <p className="">Subscribe to Newsletter</p>
            <div className="flex justify-center md:justify-start items-center mt-2">
              <input
                type="text"
                placeholder="Search Here"
                className="border border-gray-300 rounded-l-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-5 text-center md:text-right">
  <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
    <div className="py-2 px-4 border md:text-lg sm:text-base text-sm font-medium rounded-full">
      <a href="tel:+917880119983" className="hover:underline">+91-7880119983</a>,
      <a href="tel:+919713315529" className="hover:underline">+91-9713315529</a>
    </div>
    <p className="py-2 px-4 border md:text-lg sm:text-base text-sm font-medium rounded-full">
      info@mbbswala.in
    </p>
  </div>

  <p className="py-2 px-4 border md:text-lg sm:text-base text-sm font-medium rounded-full max-w-xs md:max-w-full">
    Sf 17, Aakriti Business Centre, Salaiya, Bhopal, (MP), 462026
  </p>

  <div className="flex flex-wrap justify-center md:justify-end gap-4 md:mt-0 text-sm sm:text-base">
    <a href="#" className="hover:text-blue-500">Privacy & Cookie Policy</a>
    <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
  </div>
</div>

        </div>
        <div className="border-t py-4 border-[#0005] flex items-center justify-center">
          <p className="">© MBBS Wala 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
