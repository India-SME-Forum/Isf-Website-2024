import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const InfiniteCarousel = ({ items }) => {
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  // Calculate total width of all items
  useEffect(() => {
 

 

  // Animation sequence
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
        }
      });
      // Reset position instantly without animation
      controls.set({ x: 0 });
      // Recurse the animation
      animate();
    };

    animate();
  }, );

  return (
    <div className="carousel overflow-hidden h-[400px] 2xl:px-20 w-full relative">
      <motion.div
        className="carousel-track flex h-full"
        animate={controls}
      >
        {/* Original items */}
        {items.map((img, index) => (
          <div
            key={`original-${index}`}
            className="carousel-item cursor-pointer w-full h-full flex-shrink-0"
          >
            <img
              className="w-full h-full "
              src={img.imgSrc}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        {/* Duplicated items for seamless loop */}
        {items.map((img, index) => (
          <div
            key={`duplicate-${index}`}
            className="carousel-item cursor-pointer w-full h-full flex-shrink-0"
          >
            <img
              className="w-full h-full object-cover"
              src={img.imgSrc}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;