import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SlidingTextEffect = ({text}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 500);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <h1 className="font-bold">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{
            color: index === activeIndex ? "#0082FA" : "#EB0104",
            transition: "color 0.3s ease-in-out",
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default SlidingTextEffect;
