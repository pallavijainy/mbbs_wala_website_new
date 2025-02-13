import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import signin from "../assets/signin.png";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import googleSigninButton from "../assets/GoogleSigninButton.png";
import facebookSigninButton from "../assets/facebookSigninButton.png";
import appleSigninButton from "../assets/appleSigninButton.png";
import { motion, AnimatePresence } from "framer-motion";

const LoginForm = ({ setIsLoginFormOpen }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: isSignUp ? containerRef.current.scrollHeight : 0,
                behavior: "smooth",
            });
        }
    }, [isSignUp]);

    const [signupFormData, setSignupFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
        course: "",
        altCourse: "",
        termsAccepted: false,
    });

    const handleSignupFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(signupFormData);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 z-50 p-10 bg-black/20">
            <div className="relative w-3/4 rounded-3xl flex flex-col overflow-hidden bg-blue-700 ">
                <div className="flex items-start justify-between w-full">
                    <div className="w-1/5 bg-white flex items-center justify-center rounded-br-full">
                        <img src={logo} alt="logo" className="w-2/3" />
                    </div>
                    <div className="bg-red-500 px-10 py-5 rounded-bl-full">
                        <IoClose
                            size={20}
                            className="text-white"
                            onClick={() => setIsLoginFormOpen(false)}
                        />
                    </div>
                </div>

                <div className="flex items-start justify-evenly w-full mt-5">
                    <div className="w-1/3 flex gap-5 pr-5 py-1">
                        <div className="flex flex-col gap-5 p-5">
                            <h1 className="text-white text-2xl font-bold">
                                Sign In
                            </h1>
                            <p className="text-white text-xs font-thin w-full">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel architecto consequatur
                                praesentium enim, vita
                            </p>
                        </div>
                        <div className="ml-10 mt-10">
                            <img
                                src={signin}
                                alt="logo"
                                className="w-full scale-200"
                            />
                        </div>
                    </div>
                    <div className="w-2/5 h-[600px] -mt-15 rounded-xl flex flex-col gap-5 p-5 overflow-hidden ">
                        <div
                            ref={containerRef}
                            className="h-full overflow-y-auto scroll-smooth"
                        >
                            {/* 🔹 Sign In Form */}
                            <div className="w-full bg-white rounded-xl flex flex-col gap-4 p-5 h-full">
                                <div className="flex items-st justify-between">
                                    <h1 className="text-sm font-bold">
                                        Welcome to{" "}
                                        <span className="text-blue-500">
                                            MBBS Wala
                                        </span>
                                    </h1>
                                    <p className="text-[0.7rem] text-end">
                                        Don&apos;t have an account? <br />
                                        <span
                                            className="text-blue-500 font-medium cursor-pointer"
                                            onClick={() => setIsSignUp(true)}
                                        >
                                            Sign Up
                                        </span>
                                    </p>
                                </div>
                                <h1 className="text-5xl font-medium">
                                    Sign in
                                </h1>
                                <div className="flex items-center gap-2 mt-2">
                                    <button>
                                        <img
                                            src={googleSigninButton}
                                            alt="google"
                                        />
                                    </button>
                                    <button>
                                        <img
                                            src={facebookSigninButton}
                                            alt="facebook"
                                        />
                                    </button>
                                    <button>
                                        <img
                                            src={appleSigninButton}
                                            alt="apple"
                                        />
                                    </button>
                                </div>
                                <form className="flex flex-col gap-4 mt-5">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm"
                                        >
                                            Enter your email or mobile number*
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm"
                                        >
                                            Password*
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <p className="text-sm text-end text-blue-500">
                                        Forgot Password?
                                    </p>
                                    <button
                                        type="submit"
                                        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                            {/* 🔹 Sign Up Form */}
                            <div className="w-full bg-white rounded-xl flex flex-col gap-4 p-5 h-full">
                                <div className="flex items-st justify-between">
                                    <h1 className="text-sm font-bold">
                                        Welcome to{" "}
                                        <span className="text-blue-500">
                                            MBBS Wala
                                        </span>
                                    </h1>
                                    <p className="text-[0.7rem] text-end">
                                        Already have an account? <br />
                                        <span
                                            className="text-blue-500 font-medium cursor-pointer"
                                            onClick={() => setIsSignUp(false)}
                                        >
                                            Sign In
                                        </span>
                                    </p>
                                </div>
                                <h1 className="text-5xl font-medium">
                                    Sign Up
                                </h1>
                                <form
                                    onSubmit={handleSignup}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={signupFormData.fullName}
                                                onChange={
                                                    handleSignupFormChange
                                                }
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={signupFormData.email}
                                                onChange={
                                                    handleSignupFormChange
                                                }
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm">
                                                Mobile Number
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                value={signupFormData.mobile}
                                                onChange={
                                                    handleSignupFormChange
                                                }
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm">
                                                Enter Your City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={signupFormData.city}
                                                onChange={
                                                    handleSignupFormChange
                                                }
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Select Your Interested Course
                                        </label>
                                        <input
                                            type="text"
                                            name="course"
                                            value={signupFormData.course}
                                            onChange={handleSignupFormChange}
                                            className="w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Select Your Alternative Interested
                                            Course
                                        </label>
                                        <input
                                            type="text"
                                            name="altCourse"
                                            value={signupFormData.altCourse}
                                            onChange={handleSignupFormChange}
                                            className="w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="termsAccepted"
                                            checked={
                                                signupFormData.termsAccepted
                                            }
                                            onChange={handleSignup}
                                            className="mr-2"
                                        />
                                        <label className="text-sm">
                                            I&apos;ve read and agree with{" "}
                                            <a
                                                href="#"
                                                className="text-blue-500"
                                            >
                                                terms of service
                                            </a>{" "}
                                            and our{" "}
                                            <a
                                                href="#"
                                                className="text-blue-500"
                                            >
                                                privacy policy
                                            </a>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full p-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    setIsLoginFormOpen: PropTypes.func.isRequired,
};

export default LoginForm;
