import { ChartNoAxesCombined } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatCard = ({ value, label, hasPlusSign }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ""));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-row items-center  justify-center bg-stone-500/30 rounded-2xl p-6 transform transition-all duration-300 "
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" md:text-3xl 2xl:text-4xl font-bold text-white mb-2 flex items-center">
          {count.toLocaleString()}
          {hasPlusSign && <span className="text-white/90">+</span>}
          {}
        </div>
        <div className="text-sm font-bold text-white/90 uppercase tracking-wider text-center ">
          {label}
        </div>
      </div>
    </div>
  );
};

const MembershipStats = () => {
  const stats = [
    { value: "100000", label: "Member", hasPlusSign: false },
    { value: "250000000000", label: "Annual Turnover", hasPlusSign: true },
    { value: "900000", label: "People Employed", hasPlusSign: true },
    { value: "1326990000", label: "Capital Employed", hasPlusSign: true },
  ];

  return (
    <div className="2xl:px-40 ">
      <div className="flex m-5 gap-2 items-baseline">
        <h1 className=" text-2xl  ">Forum Impact</h1>
        <ChartNoAxesCombined className="w-8 h-8" />
      </div>
      <div
        className="w-full flex items-center justify-center relative overflow-hidden "
        style={{ minHeight: "300px" }}
      >
        {/* Background Image */}

        <div className="absolute inset-0 w-full h-full">
          <img
            src="banners/bridg.jpg"
            alt="MSME Growth Background"
            className="2xl:rounded-lg w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r "></div>
        </div>

        {/* Content */}
        <div className="relative ">
          <div className="flex flex-col items-center justify-center  p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  hasPlusSign={stat.hasPlusSign}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipStats;
