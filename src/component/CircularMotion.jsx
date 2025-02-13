import { motion, useMotionValue, useTransform } from "framer-motion";
import doctor_1 from "../assets/doctor_1.jpg";
import doctor_2 from "../assets/doctor_2.jpg";
import doctor_3 from "../assets/doctor_3.jpg";
import doctor_4 from "../assets/doctor_4.jpg";
import doctor_5 from "../assets/doctor_5.jpg";
import doctor_6 from "../assets/doctor_6.jpg";
const images = [
    { src: doctor_1, alt: "Doctor 1" },
    { src: doctor_2, alt: "Doctor 2" },
    { src: doctor_3, alt: "Doctor 3" },
    { src: doctor_4, alt: "Doctor 4" },
    { src: doctor_5, alt: "Doctor 5" },
    { src: doctor_6, alt: "Doctor 6" },
    { src: doctor_1, alt: "Doctor 1" },
    { src: doctor_2, alt: "Doctor 2" },
    { src: doctor_3, alt: "Doctor 3" },
    { src: doctor_4, alt: "Doctor 4" },
    { src: doctor_5, alt: "Doctor 5" },
    { src: doctor_6, alt: "Doctor 6" },
];
const scrollingImages = [...images, ...images];

const radius = 700; // Radius of the circle
const totalImages = images.length;
const angleStep = (2 * Math.PI) / totalImages;

const CircularMotion = () => {
    const rotateValue = useMotionValue(0);
    const inverseRotation = useTransform(rotateValue, (value) => -value);
    return (
        <div className="relative w-full h-52 lg:h-96 flex justify-center items-center">
            <motion.div
                className="hidden relative bottom-[200%] w-full h-full md:flex items-center justify-center"
                animate={{ rotate: 360 }}
                style={{ rotate: rotateValue }}
                transition={{
                    repeat: Infinity,
                    duration: 100,
                    ease: "linear",
                }}
            >
                {images.map((image, index) => {
                    const angle = index * angleStep;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-32 h-44 md:w-60 md:h-90 rounded-full shadow-lg overflow-hidden"
                            style={{
                                top: `calc(50% + ${y}px - 100px)`,
                                left: `calc(50% + ${x}px - 100px)`,
                                transform: `translate(${x}px, ${y}px)`,
                                rotate: inverseRotation, // Counteract the parent div’s rotation
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
            <motion.div
                className="flex relative py-10 overflow-hidden items-center gap-4 md:hidden w-max"
                animate={{
                    x: ["0%", "-100%"], // Moves from 0% to -100%
                }}
                transition={{
                    repeat: Infinity,
                    duration: 50, // Adjust speed
                    ease: "linear",
                }}
            >
                {scrollingImages.map((image, index) => (
                    <div
                        key={index}
                        className="w-32 h-32 md:w-60 md:h-60 flex-shrink-0 rounded-full overflow-hidden shadow-lg"
                    >
                        <img
                            src={image.src}
                            className="w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CircularMotion;
