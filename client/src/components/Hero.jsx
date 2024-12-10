import React from "react";

const Hero = () => {
  return (
    <div className="z-0">
      <div className="flex flex-col sm:flex-row 2xl:px-40">
        {/*carousel  banner */}
        <div className="carousel  h-[400px] 2xl:px-20  w-full">
          <div className="carousel-item  w-full h-full">
            <img
              className="w-full h-full "
              src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </div>
          <div className="carousel-item w-full h-full">
            <img
              className="w-full h-full "
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img> 
          </div>
          <div className="carousel-item w-full h-full">
            <img
              className="w-full h-full "
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img>
          </div>
        </div>
        {/* banner content */}
        <div className="bg-sky-400  z-0 glass banner-content sm:w-[90%] ">
          <div className="   w-full h-full flex flex-col items-center justify-center">
            <div>
              <h1 className="  text-4xl font-inter text-center ">
                Welcome To India's Largest<br/>Non Profit Organisation<br/> For MSME
              </h1>
            </div>
            <div className="duration-200 transition-all  rounded-md mt-5">
              <p className="btn btn-outline btn-md   hover:scale-105  backdrop-blur-sm shadow-xl  ">Msme Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
