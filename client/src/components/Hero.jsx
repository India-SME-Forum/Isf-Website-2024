import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import CarouselScroll from "./CarouselScroll";
// import InfiniteCarousel from './InfiniteCarousel';

const Hero = () => {
  const bannerImg = [
    { imgSrc: "banners/ban1.jpg", url: "https://indiasme100.com/" },
    { imgSrc: "banners/ban2.jpg", url: "https://indiasmeforum.org/afl-2024/" },
    { imgSrc: "banners/ban3.jpg", url: "https://indiaxports.com/" },
    { imgSrc: "banners/ban4.jpg", url: "https://womenentrepreneursforum.org/wep2/" },
    { imgSrc: "banners/ban6.jpg", url: "https://indiasmeforum.org/sashaktikaran/index.php",},
  ];

  return (
    <div className="z-0 ">
      <div className="flex flex-col  sm:flex-row 2xl:px-40">
        {/*carousel  banner */}
        {/* <div className="carousel  animate-scroll overflow-x-visible h-[400px] 2xl:px-20  w-full ">
          {items.map((img, index) => {
            return (
              <div key={index}  className="carousel-item  transition-all w-full h-full">
                <a className="cursor-pointer h-full w-full"  href={img.url}>
                <img  className=" h-full w-full" src={img.imgSrc} ></img></a>
              </div>
            );
          })} 
        </div>
  */}
        <CarouselScroll banners={bannerImg} />

        {/* banner content */}
        <div className="bg-sky-400  z-0 glass banner-content sm:w-[90%] ">
          <div className="   w-full h-full flex flex-col items-center justify-center">
            <div>
              <h1 className="  text-4xl font-inter text-center ">
                Welcome To India's Largest
                <br />
                Non Profit Organisation
                <br /> For MSME
              </h1>
            </div>
            <div className="duration-200 transition-all  rounded-md mt-5">
              <p className="btn btn-outline btn-md   hover:scale-105  backdrop-blur-sm shadow-xl  ">
                Msme Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
