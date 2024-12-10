import { Waypoints } from "lucide-react";
import React, { useState } from "react";

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    "rb_1255.png",
    "v-letter-gradient-colorful-vector-logo.png",
    "pngwing.com.png",
    "pngegg.png",
    "rb_1255.png",
    "rb_1255.png",
    "v-letter-gradient-colorful-vector-logo.png",
    "pngwing.com.png",
    "pngegg.png",
    "isf_new_logo_2024.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + partners.length) % partners.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % partners.length);
  };

  return (
    <div className="w-full  2xl:px-40">
      {" "}
      <div className=" flex items-baseline gap-2 w-full pl-5 text-start  mt-4">
        <h1 className="text-2xl ">Partners</h1>
        <Waypoints className="w-8 h-7" />
      </div>
      <div className="carousel mx-5 object-cover w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`carousel-item  relative h-[200px]  w-[20%] ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={partner}
              alt={`Partner ${index}`}
              className="w-[50%] object-scale-down cursor-pointer hover:scale-105 duration-300 transition-all z-20"
            />
          </div>
        ))}

        {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#" className="btn btn-circle" onClick={handlePrev}>
            ❮
          </a>
          <a href="#" className="btn btn-circle" onClick={handleNext}>
            ❯
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PartnerCarousel;
