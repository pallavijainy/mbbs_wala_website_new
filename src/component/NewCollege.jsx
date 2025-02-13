import { FaPlayCircle } from "react-icons/fa";
import CircularMotion from "./CircularMotion";

const NewCollege = () => {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center text-center py-16 lg:px-6 bg-white">
                <h1 className="text-4xl md:text-7xl font-bold text-gray-900 max-w-5xl">
                    Everything You Need to Know About{" "}
                    <span className="text-red-600">New Medical Colleges </span>{" "}
                    and <span className="text-red-600">Knowledge</span>.
                </h1>
                <p className="mt-7 text-gray-600 max-w-2xl text-lg">
                    <p className="mt-7 text-gray-600 max-w-2xl text-lg">
                        NEET Mastery, Medical Frontiers, Expert Insights, Newly
                        Established Medical Colleges, Emerging Specializations,
                        Admission Process Updates, Webinars & Workshops
                    </p>
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-red-700">
                        Get Started
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-100">
                        <span>
                            <FaPlayCircle
                                color="red"
                                size={32}
                                className="opacity-35"
                            />
                        </span>
                        Watch Video
                    </button>
                </div>
            </div>
            <CircularMotion />
        </div>
    );
};

export default NewCollege;
