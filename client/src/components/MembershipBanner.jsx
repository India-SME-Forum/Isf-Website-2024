import React from "react";
import { Users, User, Book, Calendar } from "lucide-react";

const MembershipBanner = () => {
  const sections = [
    {
      title: "Become a Member",
      description: "Empower your business and contribute to India's thriving SME ecosystem today!",
      icon: <Users className="w-8 h-8" />,
      bgColor: "bg-teal-600",
      textColor: "text-white",
      hoverBg: "hover:bg-teal-700",
    },
    {
      title: "Membership Benefits & Plans",
      description:
        "From emerging startups to established businesses, explore the wide range of advantages and plans tailored to your needs.",
      icon: <User className="w-8 h-8" />,
      bgColor: "bg-slate-200",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-slate-300",
    },
    {
      title: "Member Directory",
      description: "Connect with India's vibrant SME community by accessing our comprehensive member directory.",
      icon: <Book className="w-8 h-8" />,
      bgColor: "bg-amber-500",
      textColor: "text-white",
      hoverBg: "hover:bg-amber-600",
    },
    {
      title: "Events",
      description: "Participate in over 100+ events annually designed to foster growth, learning, and collaboration.",
      icon: <Calendar className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-orange-200",
    },
  ];

  return (
    <div className="max-w-full my-5 2xl:px-40 mx-auto p-4">
      <div className="flex  items-baseline gap-2">
        <h1 className="text-2xl  mb-4">Membership Program</h1>
        <Users className="w-8 h-8" /> 
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-lg overflow-hidden shadow-xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${section.bgColor} ${section.textColor} ${section.hoverBg} 
              p-6 transition-all duration-300 ease-in-out cursor-pointer
              transform hover:-translate-y-1 hover:shadow-lg
              group relative`}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {section.icon}
                </div>
              </div>

              <h3 className="text-lg   text-center md:text-left">
                {section.title}
              </h3>

              <p className="text-sm text-center md:text-left opacity-90">
                {section.description}
              </p>
            </div>

            {/* Animated underline on hover */}
            <div className="absolute bottom-0 left-0 w-full">
              <div className="h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipBanner;
