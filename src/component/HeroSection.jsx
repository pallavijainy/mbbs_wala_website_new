import heroImage from "../assets/heroImage.jpg";
import Navbar from "../layout/Navbar";
import down_arrow from "../assets/down_arrow.svg";
import up_arrow from "../assets/up_arrow.svg";
import BackgroundImageText from "./BackgroundImageText";
import PropTypes from "prop-types";

const HeroSection = ({ setIsLoginFormOpen }) => {
    return (
        <div
            className="h-full rounded-3xl overflow-hidden m-5"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        >
            <div className="w-full h-full backdrop-blur-[3px] p-5">
                <Navbar setIsLoginFormOpen={setIsLoginFormOpen} />
                <div className="flex flex-col justify-center items-center space-y-3 lg:mt-10">
                    <img src={down_arrow} alt="" className="h-16 lg:h-full" />
                    <h1 className="text-2xl font-bold">WELCOME TO</h1>
                    <div className="flex items-center space-x-2">
                        <BackgroundImageText />
                        {/* <h1 className="lg:text-9xl text-5xl font-bold">MBBS</h1> */}
                        <h1 className="lg:text-9xl text-5xl font-bold text-[#0082FA]">
                            WALA
                        </h1>
                    </div>

                    <h1 className="lg:text-8xl text-2xl font-bold">
                        Admission and Counselling
                    </h1>
                    <h1 className="lg:text-4xl text-xl font-semibold">
                        Since 2005
                    </h1>
                    <img src={up_arrow} alt="" className="h-20 lg:h-full" />
                    <h1 className="italic text-center text-lg lg:text-3xl kalamFont font-bold">
                        "Stress-Free MBBS Admissions? We've Got You Covered."
                    </h1>
                    <p className="KiteOneFont max-w-6xl text-center text-md lg:text-lg">
                        Your Trusted Partner on the Path to Becoming a Doctor.
                        From cracking NEET to securing your dream medical seat,
                        We're not just counselors; we're your partners in
                        success. MBBS Wala is here to guide you every step of
                        the way. We offer expert NEET preparation resources to
                        comprehensive admission counseling, giving you the
                        confidence to navigate the medical field's challenges.
                        Don't just dream of becoming a doctor – make it happen
                        with MBBS Wala.
                    </p>
                </div>
            </div>
        </div>
    );
};

HeroSection.propTypes = {
    setIsLoginFormOpen: PropTypes.func.isRequired,
};

export default HeroSection;
