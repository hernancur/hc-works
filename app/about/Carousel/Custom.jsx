/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <div className="custom-carousel">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="carousel-container"
        >
          <Image
            width={600}
            height={600}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-96 rounded-lg object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CustomCarousel;
