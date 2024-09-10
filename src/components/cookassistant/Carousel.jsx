import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import test1 from "../../assets/universe.jpg";
import test2 from "../../assets/ca_ht.svg";

const images = [test1, test2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative w-full max-w-lg max-h-screen mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full max-h-screen"
        />
      </div>
      {/* <div className="">
        <motion.img
          animate={{
            scale: [0.5, 1],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="relative w-full max-h-screen"
          src={images[currentIndex]}
        ></motion.img>
      </div> */}
      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full top-1/2 left-5 hover:bg-opacity-100 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full top-1/2 right-5 hover:bg-opacity-100 focus:outline-none"
      >
        ❯
      </button>
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-slate-200" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
