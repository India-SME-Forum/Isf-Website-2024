import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import CarouselScroll from "./CarouselScroll";
// import InfiniteCarousel from './InfiniteCarousel';

const Hero = () => {
  const bannerImg = [
    { imgSrc: "banners/ban1.jpg", url: "https://indiasme100.com/" },
    { imgSrc: "banners/ban2.jpg", url: "https://indiasmeforum.org/afl-2024/" },
    { imgSrc: "banners/ban3.jpg", url: "https://indiaxports.com/" },
    {
      imgSrc: "banners/ban4.jpg",
      url: "https://womenentrepreneursforum.org/wep2/",
    },
    {
      imgSrc: "banners/ban6.jpg",
      url: "https://indiasmeforum.org/sashaktikaran/index.php",
    },
  ];

  return (
    <div className="z-0 ">
      <div className="2xl:px-40">
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
        {/* <CarouselScroll banners={bannerImg} /> */}

        {/* banner content */}
        <div className=" relative md:h-[400px] md:w-[100%] z-0 sm:w-[100%] ">
          <p className="z-30 absolute w-[70%] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl  2xl:text-3xl font-extrabold">
          Empowering Growth,Driving Success <br/> <span className=" md:text-4xl 2xl:text-5xl">India’s Largest Not-for-Profit Organisation for MSMEs</span>
          </p>
          <img
            src="banners/ban1.jpg"
            className="object-cover w-full md:h-[500px] 2xl:h-[500px] items-center"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
