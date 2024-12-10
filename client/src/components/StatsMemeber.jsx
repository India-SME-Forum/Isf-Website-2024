import { ChartNoAxesCombined } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, label, hasPlusSign }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
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
      className="backdrop-blur-sm flex flex-row items-center justify-center bg-stone-700/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/40"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl  text-white mb-2 flex items-center">
          {count.toLocaleString()}
          {hasPlusSign && 
            <span className="text-white/90">+</span>
          }
          {}
        </div>
        <div className="text-sm text-white/90 uppercase tracking-wider text-center font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

const MembershipStats = () => {
  const stats = [
    { value: '100000', label: 'Member', hasPlusSign: false },
    { value: '250000000000', label: 'Annual Turnover', hasPlusSign: true },
    { value: '900000', label: 'People Employed', hasPlusSign: true },
    { value: '1326990000', label: 'Capital Employed', hasPlusSign: true }
  ];

  return (
    <div className='2xl:px-40 '>
         <div className='flex m-5 gap-2 items-baseline'>
        <h1 className=' text-2xl  '>Forum Impact</h1>
        <ChartNoAxesCombined className='w-8 h-8'/>
      </div>
    <div className="w-full flex items-center justify-center relative overflow-hidden    " style={{ minHeight: '300px' }}>
      {/* Background Image */}
      
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="MSME Growth Background"
          className="2xl:rounded-lg w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute  inset-0 bg-gradient-to-r "></div>
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