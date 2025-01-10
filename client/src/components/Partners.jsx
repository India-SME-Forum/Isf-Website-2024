import React from 'react';
import { Waypoints } from 'lucide-react';

const PartnerCarousel = () => {
  const partners = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg",
    "23.jpg", "24.jpg", "25.jpg"
  ];

  return (
    <div className="w-full overflow-hidden 2xl:px-40">
      <div className="flex items-baseline gap-2 w-full pl-5 text-start mt-4">
        <h1 className="text-2xl font-semibold">Partners</h1>
        <Waypoints className="w-8 h-7" />
      </div>
      
      <div className="relative overflow-hidden mx-5 py-8">
        <div className="flex animate-scroll">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[200px] h-[200px] px-4"
            >
              <img
                src={`partners/${partner}`}
                alt={`Partner ${index + 1}`}
                className="w-full h-full object-contain hover:scale-105 duration-300 transition-all cursor-pointer"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0   w-[200px] h-[200px] px-4"
            >
              <img
                src={`partners/${partner}`}
                alt={`Partner ${index + 1}`}
                className="w-full h-full object-contain hover:scale-105 duration-300 transition-all cursor-pointer"
              />
            </div>
          ))}
        </div>

        <style>{`
          .animate-scroll {
            animation: scroll 60s linear infinite;
            display: flex;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Pause animation on hover */

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PartnerCarousel;