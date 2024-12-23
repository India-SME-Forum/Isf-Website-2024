import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MemberCard = ({ name, company, designation }) => (
  <div className="card w-96 bg-base-100 shadow-xl mx-2 flex-shrink-0">
    <figure className="px-10 pt-10">
      <img 
        src="/api/placeholder/200/200" 
        alt={`${company} logo`}
        className="rounded-xl w-32 h-32 object-cover"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xl font-bold">{name}</h2>
      <p className="text-lg font-semibold text-gray-700">{company}</p>
      <p className="text-sm text-gray-600">{designation}</p>
    </div>
      </div>
);

const MemberCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const members =[
    {
        "name": "Sreeni Tripuraneni",
        "company": "4G Identity Solutions Pvt Ltd",
        "designation": "Chairman & CEO",
        "src": ""
    },
    {
        "name": "Nitin Tiwari",
        "company": "ACME UNIVERSAL SAFEZONE 9 PVT LTD",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Bhavan Vora",
        "company": "Advance Syntex Pvt Ltd",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Anil Vyas",
        "company": "Alice Pharmaceuticals Private Limited",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Rajiv Arora",
        "company": "Amrapali Jewels Pvt Ltd",
        "designation": "Director",
        "src": ""
    },
    {sdfsd
        "name": "Raujesh Agrrawal",
        "company": "Ashish Life Science",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Smita Naram",
        "company": "Ayushakti Ayurved Pvt. Ltd.",
        "designation": "Founder",
        "src": ""
    },
    {
        "name": "Ketan C. Thakkar",
        "company": "Balkrishna Textiles Private Limited",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Sachin Mane",
        "company": "Baramati Cattlefeeds Private Limited",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Y. Srinivas Reddy",
        "company": "Bevcon Wayors Pvt. Ltd.",
        "designation": "Founder & MD",
        "src": ""
    },
    {
        "name": "Milan Dalal",
        "company": "Bluecoat Pvt Ltd",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Gaurav Talwar",
        "company": "Brilliant Polymers Pvt Ltd",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Deepak J. Vora",
        "company": "Ceramic India",
        "designation": "CEO",
        "src": ""
    },
    {
        "name": "Vinod Kumar Dutt",
        "company": "Chanakya Dairy Products Ltd",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Pawan Kumar Goel",
        "company": "Chemical Resources (CHERESO)",
        "designation": "Owner",
        "src": ""
    },
    {
        "name": "Pankaj Zanwar",
        "company": "CIAN Healthcare Ltd.",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Piyush Todi",
        "company": "Coast Liners Pvt. Ltd.",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Binod K Maheshwari",
        "company": "Creative Polypack Ltd.",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Gaurav Jain",
        "company": "DCP India Pvt. Ltd.",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Sameer Patel",
        "company": "Deal Global Fashions Pvt. Ltd.",
        "designation": "Founder",
        "src": ""
    },
    {
        "name": "Rajiv Jain",
        "company": "Deesha Trade Endeavours Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Devaraya M. Sheregar",
        "company": "Devu Tools Pvt. Ltd.",
        "designation": "Chairman and MD",
        "src": ""
    },
    {
        "name": "A.R. Sabharwal",
        "company": "Dr. Sabharwal's Manufacturing Labs Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "P. Sam Prasad",
        "company": "Eagle Press Pvt. Ltd.",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Krishna Kumar",
        "company": "Eggway International Asia Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Kamal Sethia",
        "company": "Elin Appliances Pvt Ltd",
        "designation": "Director",
        "src": ""
    },
    {
        "name": "Makrand Appalwar",
        "company": "Emmbi Industries Limited",
        "designation": "Chairman & MD",
        "src": ""
    },
    {
        "name": "Sarita Sarvaria",
        "company": "Express Housekeepers",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Naresh Kumar Gupta",
        "company": "Fun Zoo Toys (India)",
        "designation": "Proprietor",
        "src": ""
    },
    {
        "name": "Arun Prakash",
        "company": "Genetix Biotech Asia Pvt. Ltd.",
        "designation": "CEO",
        "src": ""
    },
    {
        "name": "Sanjiv Gupta",
        "company": "Global Advertisers",
        "designation": "Proprietor",
        "src": ""
    },
    {
        "name": "Suresh Bherwani",
        "company": "Global Energy Food India Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Rajiv Mitra",
        "company": "Govind Milk & Milk Products Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Rajat Agrawal",
        "company": "Gravita India Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Anil Kumar",
        "company": "Great Sports Infra Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Milind Kelkar",
        "company": "Grind Master Machines Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Dilip Dev",
        "company": "H.D. Wires Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Ghanshyam D. Dholakia",
        "company": "H.K. Jewels Pvt. Ltd.",
        "designation": "MD",
        "src": ""
    },
    {
        "name": "Arun Kelkar",
        "company": "Hexagon Nutrition Pvt. Ltd.",
        "designation": "Chairman & MD",
        "src": ""
    },
    {
        "name": "Nitin Mane",
        "company": "Hindustan Feeds Mfg. Co.",
        "designation": "Managing Partner",
        "src": ""
    },
    {
        "name": "Musthafa P.C.",
        "company": "ID Fresh Food India Pvt. Ltd.",
        "designation": "CEO & Founder",
        "src": ""
    },
    {
        "name": "Satyendra Johari",
        "company": "Johari Digital Healthcare Ltd.",
        "designation": "Chairman and MD",
        "src": ""
    }
]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === members.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [members.length]);

  const scroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? members.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === members.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="w-full relative">
      <div className="carousel w-full py-8">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 384}px)` }}>
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => scroll('left')}
        className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MemberCarousel;