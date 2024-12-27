import React, { useEffect, useState } from 'react';

const CarouselScroll = ({ banners, autoScrollInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const totalSlides = banners.length;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(nextSlide, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, autoScrollInterval]);

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="carousel  md:h-[400px] duration-300 w-full  ">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={`carousel-item  relative w-full duration-500 ${
              currentSlide === index ? 'block' : 'hidden'
            }`}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {/* Banner Link Wrapper */}
            <a
              href={banner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {/* Responsive Image */}
              <img
                src={banner.imgSrc}
                alt={`Banner ${index + 1}`}
                className="w-full h-full "
              />
            </a>

            {/* Navigation Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 px-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevSlide();
                }}
                className="btn btn-circle bg-black/30 hover:bg-black/50 text-white border-none"
              >
                ❮
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextSlide();
                }}
                className="btn btn-circle bg-black/30 hover:bg-black/50 text-white border-none"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselScroll;