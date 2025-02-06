import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

const ConnectWithCommunity = () => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between px-5 py-12 lg:px-16 md:px-8 bg-white">
            <div className="lg:w-1/2 text-center lg:text-left space-y-5">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="User 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>

                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="User 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1693000697560-a3f90545c792?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="User 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                    <p>18k+ Student have already Apply</p>
                </div>

                <h2 className="text-3xl font-bold "> <span  className="text-blue-500">Connect</span> with the MBBS Wala Community</h2>
                <p className="text-gray-700 text-justify ">
                Get personalized guidance and expert advice on your journey to becoming a doctor.
Subscribe to our newsletter for valuable resources, tips on navigating the medical
admissions process, and updates on the latest trends in medical education. Your medical
career is a unique journey, and at MBBS Wala, we understand that. We specialize in
providing personalized counseling and support, empowering you to make informed
decisions every step of the way. Let us guide you toward achieving your medical
aspirations with confidence and ease.
                </p>
                {/* <p className="text-gray-700 text-justify">
                    Pursuing a career in medicine is a dream for many, but the journey to becoming a doctor is
                    filled with challenges and critical decisions. At MBBS Wala, we specialize in providing
                    expert admission and counseling support, empowering you to make informed choices at every
                    step. Let us guide you toward achieving your medical aspirations with confidence and ease.
                </p> */}
            </div>

            <div className="lg:w-1/2 p-2">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Course</option>
                        <option value="mbbs">MBBS</option>
                        <option value="bds">BDS</option>
                    </select>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Score</option>
                        <option value="90">90+</option>
                        <option value="80">80+</option>
                    </select>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Budget</option>
                        <option value="low">Below $50K</option>
                        <option value="medium">$50K - $100K</option>
                    </select>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">State</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 flex gap-1 items-center justify-center text-white py-2 rounded "
                    >
                        Schedule a Call <MdOutlinePhone />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConnectWithCommunity;
