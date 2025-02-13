import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import login_icon from "../assets/loginButtonIcon.svg";
import PropTypes from "prop-types";

const Navbar = ({ color = "black", setIsLoginFormOpen }) => {
    const navOptions = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        // { name: "Placements", path: "/placements" },
        { name: "Institution", path: "/institution" },
        // { name: "Institute Life", path: "/institute-life" },
        { name: "Blog", path: "/blog" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="hidden  relative md:flex justify-center items-center gap-5">
                {navOptions.map((el, index) => (
                    <NavLink
                        key={index}
                        to={el.path}
                        className={({ isActive }) =>
                            `text-${color} font-semibold text-lg cursor-pointer px-5 py-2 rounded-3xl transition-all jostFont 
              ${
                  isActive
                      ? "bg-yellow-500 text-white"
                      : "hover:bg-[#EEA81F] hover:text-white"
              }`
                        }
                    >
                        {el.name}
                    </NavLink>
                ))}
                <button
                    className="absolute right-0 bg-blue-700 text-white px-6  py-2 rounded-full font-medium shadow-md flex items-center gap-3"
                    onClick={() => setIsLoginFormOpen(true)}
                >
                    Login
                    <img src={login_icon} alt="login" className="w-4 h-4" />
                </button>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-end items-center p-4">
                <div
                    className="text-white bg-[#0082FA] p-2 rounded-full"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <GiHamburgerMenu />
                </div>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col items-center gap-3 bg-white shadow-md p-4 rounded-lg">
                    {navOptions.map((el, index) => (
                        <NavLink
                            key={index}
                            to={el.path}
                            className={({ isActive }) =>
                                `text-black font-semibold text-lg cursor-pointer p-2 rounded transition-all jostFont 
                ${
                    isActive
                        ? "bg-yellow-500 text-white"
                        : "hover:bg-[#EEA81F] hover:text-white"
                }`
                            }
                        >
                            {el.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
};

Navbar.propTypes = {
    setIsLoginFormOpen: PropTypes.func.isRequired,
    color: PropTypes.string,
};

export default Navbar;
