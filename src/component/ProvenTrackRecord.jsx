import React from "react";
import image from "../assets/new_image.jpg"
import CountUp from "react-countup";

const ProvenTrackRecord = () => {
    return (
        <section className="bg-white py-12 px-5 md:px-8 lg:px-16 ">
            <div className="max-w-9xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
              
                <div className="lg:w-[80%] flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className="text-sm text-blue-600 font-semibold mb-2">Milestones</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 lg:mb-16">
                            Our Proven Track <span className="text-red-600 font-bold">Record</span>
                        </h2>
                        <p className="text-gray-600 lg:text-xl lg:mb-10 mb-6">
                            Join Our Growing Community of Future Doctors
                        </p>
                        <div className="bg-[#F9F9FB] text-center rounded-lg p-6 shadow-sm">
                            <h3 className="text-3xl lg:text-6xl font-normal mb-2"><CountUp start={0} end={10000}/>+</h3>
                            <p className="text-gray-600 text-lg lg:text-2xl">Successful Counselling Sessions</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg w-full h-64 md:h-96 lg:h-[550px] overflow-hidden shadow-md">
                            <img
                                src={image}
                                alt="Healthcare professionals"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[20%] flex flex-col space-y-8">
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl lg:text-5xl font-normal mb-2"><CountUp start={0} end={8000}/>+</h3>
                        <p className="text-gray-600 text-lg">Successful Admissions</p>
                    </div>
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl lg:text-5xl font-normal mb-2"><CountUp start={0} end={700}/>+</h3>
                        <p className="text-gray-600 text-lg">Top College Tie-Ups</p>
                    </div>
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl lg:text-5xl font-normal mb-2"><CountUp start={0} end={1000}/>+</h3>
                        <p className="text-gray-600 text-lg">Scholarships Secured</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvenTrackRecord;
