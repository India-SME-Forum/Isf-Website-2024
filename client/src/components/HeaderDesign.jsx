 
import React from 'react';


const HeaderDesign = ({title,Logo}) => {
  return (
    <div className="relative overflow-hidden w-full bg-gradient-to-r from-sky-600 to-blue-400 py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMyAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] bg-repeat"/>
      </div>
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start space-x-6">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight relative group">
              {/* <span className="inline-block animate-slide-up opacity-0 [animation-delay:200ms] animate-fill-forwards">
                Our
              </span>
              {' '} */}
              <span className="inline-block animate-slide-up opacity-0 [animation-delay:400ms] animate-fill-forwards">
                {title}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover:w-full transition-all duration-500"></span>
            </h1>
          </div>
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm animate-bounce-in opacity-0 [animation-delay:600ms] animate-fill-forwards">
            <Logo className="w-8 h-8 md:w-12 md:h-12 text-white animate-pulse" />
          </div>
        </div> 
        
        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/4">
          <div className="w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <style  >{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-fill-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default HeaderDesign;