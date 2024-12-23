import React from "react";
import { useState } from "react";
import { HandHelping } from "lucide-react";
const OurSupporters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {url:'',src:"4.jpg"},
    {url:'',src:"5.jpg"},
    {url:'',src:"1.jpg"},
    {url:'',src:"2.jpg"},
    {url:'',src:"3.jpg"},
    {url:'',src:"4.jpg"},
    {url:'',src:"5.jpg"},
    {url:'',src:"6.jpg"},
  ];

  return (
    <div className="w-full h-80  2xl:px-40">
      <div className=" flex w-full pl-5 text-start  mt-4">
        <h1 className="text-2xl ">Our Supporters</h1>
        <HandHelping className="w-11 h-8" />
      </div>
      <div className="carousel flex h-[20%] oveflow md:h-80 items-center object-contain justify-center mx-5   w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`glass bg-gray-200 cursor-pointer carousel-item h-[80%] items-center mx-3 object-contain overflow-hidden p-2 card shadow-md relative transition-all hover:scale-105 w-[20%] ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={partner.src}
              alt={`Partner ${index}`}
              className=" md:w-[60%] 2xl:w-[50%] rounded-full object-contain cursor-pointer duration-300 transition-all z-20"
            />
            
            <h2 className=" md:w-[50%] text-center text-wrap font-semibold ">
              Name
            </h2>
            <div className="company-logo flex ">
              <img className="size-" src={partner.src}></img>
            <h1 className=" md:w-[50%] text-center text-wrap font-semibold ">
              Company name
            </h1>
            </div>
            <p>Designation</p>
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

export default OurSupporters;
