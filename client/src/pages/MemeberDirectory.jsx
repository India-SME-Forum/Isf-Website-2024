import { HandHeart } from 'lucide-react';
import React from 'react'
import HeaderDesign from '../components/HeaderDesign';

const MemeberDirectory = () => {

    const MemberCard = ({ name, company, designation, src, logo }) => (
        <div className="card rounded-none w-48 md:w-48 md:h-[350px] 2xl:w-56 2xl:h-[400px] bg-base-100 shadow-lg my-10  ">
          <figure className="px-10 pt-10 overflow-x-clip">
            <img
              src={`supportersImg/${logo}`}
              loading="lazy"
              alt={`${company} logo`}
              className="rounded-full w-10 h-10 2xl:w-16 2xl:h-16 object-fit"
            />
          </figure>
          <div className="card-body items-center text-center">
            <img
              loading="lazy"
              src={`supportersImg/${src}`}
              alt={`${company} logo`}
              className="rounded-full w-16 h-16 2xl:w-24 2xl:h-24 object-cover"
            />
            <h2 className="card-title text-[15px] font-semibold ">{name}</h2>
            <p className="text-sm font-medium text-gray-700">{company}</p>
            <p className="text-[12px] font-light text-gray-600">{designation}</p>
          </div>
        </div>
      );
      const members = [
        {
          name: "Sreeni Tripuraneni",
          company: "4G Identity Solutions Pvt Ltd",
          designation: "Chairman & CEO",
          src: "4G IDENTITY SOLUTIONS PVT LTD.jpg",
          logo: "4G IDENTITY SOLUTIONS PVT LTD-logo.jpg",
        },
        {
          name: "Nitin Tiwari",
          company: "ACME UNIVERSAL SAFEZONE 9 PVT LTD",
          designation: "MD",
          src: "ACME UNIVERSAL SAFEZONE 9 PVT LTD.jpg",
          logo: "ACME UNIVERSAL SAFEZONE 9 PVT LTD-logo.jpg",
        },
        {
          name: "Bhavan Vora",
          company: "Advance Syntex Pvt Ltd",
          designation: "Director",
          src: "ADVANCE SYNTEX PVT LTD.jpg",
          logo: "ADVANCE SYNTEX PVT LTD-logo.jpg",
        },
        {
          name: "Anil Vyas",
          company: "Alice Pharmaceuticals Private Limited",
          designation: "Director",
          src: "ALICE PHARMACEUTICALS PRIVATE LIMITED.jpg",
          logo: "ALICE PHARMACEUTICALS PRIVATE LIMITED-logo.jpg",
        },
        {
          name: "Rajiv Arora",
          company: "Amrapali Jewels Pvt Ltd",
          designation: "Director",
          src: "AMRAPALI JEWELS PVT LTD.jpg",
          logo: "AMRAPALI JEWELS PVT LTD-logo.jpg",
        },
        {
          name: "Raujesh Agrrawal",
          company: "Ashish Life Science",
          designation: "Director",
          src: "ASHISH LIFE SCIENCE.jpg",
          logo: "ASHISH LIFE SCIENCE-logo.jpg",
        },
        {
          name: "Smita Naram",
          company: "Ayushakti Ayurved Pvt. Ltd.",
          designation: "Founder",
          src: "AYUSHAKTI AYURVED PVT. LTD.jpg",
          logo: "AYUSHAKTI AYURVED PVT. LTD-logo.jpg",
        },
        {
          name: "Ketan C. Thakkar",
          company: "Balkrishna Textiles Private Limited",
          designation: "MD",
          src: "BALKRISHNA TEXTILES PRIVATE LIMITED.jpg",
          logo: "BALKRISHNA TEXTILES PRIVATE LIMITED-logo.jpg",
        },
        {
          name: "Sachin Mane",
          company: "Baramati Cattlefeeds Private Limited",
          designation: "MD",
          src: "BARAMATI CATTLEFEEDS PRIVATE LIMITED.jpg",
          logo: "BARAMATI CATTLEFEEDS PRIVATE LIMITED-logo.jpg",
        },
        {
          name: "Y. Srinivas Reddy",
          company: "Bevcon Wayors Pvt. Ltd.",
          designation: "Founder & MD",
          src: "BEVCON WAYORS PVT.LTD.jpg",
          logo: "BEVCON WAYORS PVT.LTD-logo.jpg",
        },
        {
          name: "Milan Dalal",
          company: "Bluecoat Pvt Ltd",
          designation: "MD",
          src: "BLUECOAT PVT LTD.jpg",
          logo: "BLUECOAT PVT LTD-logo.jpg",
        },
        {
          name: "Gaurav Talwar",
          company: "Brilliant Polymers Pvt Ltd",
          designation: "MD",
          src: "BRILLIANT POLYMERS PVT LTD.jpg",
          logo: "BRILLIANT POLYMERS PVT LTD-logo.jpg",
        },
        {
          name: "Deepak J. Vora",
          company: "Ceramic India",
          designation: "CEO",
          src: "CERAMIC INDIA.jpg",
          logo: "CERAMIC INDIA-logo.jpg",
        },
        {
          name: "Vinod Kumar Dutt",
          company: "Chanakya Dairy Products Ltd",
          designation: "MD",
          src: "CHANAKYA DAIRY PRODUCTS LTD.jpg",
          logo: "CHANAKYA DAIRY PRODUCTS LTD-logo.jpg",
        },
        {
          name: "Pawan Kumar Goel",
          company: "Chemical Resources (CHERESO)",
          designation: "Owner",
          src: "CHEMICAL RESOURCES (CHERESO).jpg",
          logo: "CHEMICAL RESOURCES (CHERESO)-logo.jpg",
        },
        {
          name: "Pankaj Zanwar",
          company: "CIAN Healthcare Ltd.",
          designation: "Director",
          src: "CIAN HEALTHCARE LTD.jpg",
          logo: "CIAN HEALTHCARE LTD-logo.jpg",
        },
        {
          name: "Piyush Todi",
          company: "Coast Liners Pvt. Ltd.",
          designation: "Director",
          src: "COAST LINERS PVT. LTD.jpg",
          logo: "COAST LINERS PVT. LTD-logo.jpg",
        },
        {
          name: "Binod K Maheshwari",
          company: "Creative Polypack Ltd.",
          designation: "Director",
          src: "CREATIVE POLYPACK LTD.jpg",
          logo: "CREATIVE POLYPACK LTD-logo.jpg",
        },
        {
          name: "Gaurav Jain",
          company: "DCP India Pvt. Ltd.",
          designation: "Director",
          src: "DCP INDIA PVT. LTD..jpg",
          logo: "DCP INDIA PVT. LTD.-logo.jpg",
        },
        {
          name: "Sameer Patel",
          company: "Deal Global Fashions Pvt. Ltd.",
          designation: "Founder",
          src: "DEAL GLOBAL FASHIONS PVT. LTD..jpg",
          logo: "DEAL GLOBAL FASHIONS PVT. LTD.-logo.jpg",
        },
        {
          name: "Rajiv Jain",
          company: "Deesha Trade Endeavours Pvt. Ltd.",
          designation: "MD",
          src: "DEESHA TRADE ENDEAVOURS PVT. LTD..jpg",
          logo: "DEESHA TRADE ENDEAVOURS PVT. LTD-logo.jpg",
        },
        {
          name: "Devaraya M. Sheregar",
          company: "Devu Tools Pvt. Ltd.",
          designation: "Chairman and MD",
          src: "DEVU TOOLS PVT. LTD..jpg",
          logo: "DEVU TOOLS PVT. LTD-logo.jpg",
        },
        {
          name: "A.R. Sabharwal",
          company: "Dr. Sabharwal's Manufacturing Labs Ltd.",
          designation: "MD",
          src: "DR.SABHARWAL'S MANUFACTURING LABS LTD-logo.jpg",
          logo: "DR.SABHARWAL'S MANUFACTURING LABS LTD..jpg",
        },
        {
          name: "P. Sam Prasad",
          company: "Eagle Press Pvt. Ltd.",
          designation: "Director",
          src: "EAGLE PRESS PVT. LTD..jpg",
          logo: "EAGLE PRESS PVT. LTD.-logo.jpg",
        },
        {
          name: "Krishna Kumar",
          company: "Eggway International Asia Pvt. Ltd.",
          designation: "MD",
          src: "EGGWAY INTERNATIONAL ASIA PVT. LTD..jpg",
          logo: "EGGWAY INTERNATIONAL ASIA PVT. LTD-logo.jpg",
        },
        {
          name: "Kamal Sethia",
          company: "Elin Appliances Pvt Ltd",
          designation: "Director",
          src: "ELIN APPLIANCES PVT LTD.jpg",
          logo: "ELIN APPLIANCES PVT LTD-logo.jpg",
        },
        {
          name: "Makrand Appalwar",
          company: "Emmbi Industries Limited",
          designation: "Chairman & MD",
          src: "EMMBI INDUSTRIES LIMITED.jpg",
          logo: "EMMBI INDUSTRIES LIMITED-logo.jpg",
        },
        {
          name: "Sarita Sarvaria",
          company: "Express Housekeepers",
          designation: "MD",
          src: "EXPRESS HOUSEKEEPERS.jpg",
          logo: "EXPRESS HOUSEKEEPERS-logo.jpg",
        },
        {
          name: "Naresh Kumar Gupta",
          company: "Fun Zoo Toys (India)",
          designation: "Proprietor",
          src: "FUN ZOO TOYS (INDIA).jpg",
          logo: "FUN ZOO TOYS (INDIA)-logo.jpg",
        },
        {
          name: "Arun Prakash",
          company: "Genetix Biotech Asia Pvt. Ltd.",
          designation: "CEO",
          src: "GENETIX BIOTECH ASIA PVT.LTD..jpg",
          logo: "GENETIX BIOTECH ASIA PVT.LTD-logo.jpg",
        },
        {
          name: "Sanjiv Gupta",
          company: "Global Advertisers",
          designation: "Proprietor",
          src: "GLOBAL ADVERTISERS.jpg",
          logo: "GLOBAL ADVERTISERS-logo.jpg",
        },
        {
          name: "Suresh Bherwani",
          company: "Global Energy Food India Pvt. Ltd.",
          designation: "MD",
          src: "GLOBAL ENERGY FOOD INDIA PVT. LTD..jpg",
          logo: "GLOBAL ENERGY FOOD INDIA PVT. LTD-logo.jpg",
        },
        {
          name: "Rajiv Mitra",
          company: "Govind Milk & Milk Products Pvt. Ltd.",
          designation: "MD",
          src: "GOVIND MILK & MILK PRODUCTS PVT. LTD..jpg",
          logo: "GOVIND MILK & MILK PRODUCTS PVT. LTD-logo.jpg",
        },
        {
          name: "Rajat Agrawal",
          company: "Gravita India Ltd.",
          designation: "MD",
          src: "GRAVITA INDIA LTD..jpg",
          logo: "GRAVITA INDIA LTD-logo.jpg",
        },
        {
          name: "Anil Kumar",
          company: "Great Sports Infra Pvt. Ltd.",
          designation: "MD",
          src: "GREAT SPORTS INFRA PVT. LTD..jpg",
          logo: "GREAT SPORTS INFRA PVT. LTD-logo.jpg",
        },
        {
          name: "Milind Kelkar",
          company: "Grind Master Machines Pvt. Ltd.",
          designation: "MD",
          src: "GRIND MASTER MACHINES PVT. LTD..jpg",
          logo: "GRIND MASTER MACHINES PVT. LTD-logo.jpg",
        },
        {
          name: "Dilip Dev",
          company: "H.D. Wires Pvt. Ltd.",
          designation: "MD",
          src: "H.D.WIRES PVT. LTD..jpg",
          logo: "H.D.WIRES PVT. LTD-logo.jpg",
        },
        {
          name: "Ghanshyam D. Dholakia",
          company: "H.K. Jewels Pvt. Ltd.",
          designation: "MD",
          src: "H.K.JEWELS PVT. LTD..jpg",
          logo: "H.K.JEWELS PVT. LTD-logo.jpg",
        },
        {
          name: "Arun Kelkar",
          company: "Hexagon Nutrition Pvt. Ltd.",
          designation: "Chairman & MD",
          src: "HEXAGON NUTRITION PVT. LTD..jpg",
          logo: "HEXAGON NUTRITION PVT. LTD-logo.jpg",
        },
        {
          name: "Nitin Mane",
          company: "Hindustan Feeds Mfg. Co.",
          designation: "Managing Partner",
          src: "HINDUSTAN FEEDS MFG. CO..jpg",
          logo: "HINDUSTAN FEEDS MFG. CO-logo.jpg",
        },
        {
          name: "Musthafa P.C.",
          company: "ID Fresh Food India Pvt. Ltd.",
          designation: "CEO & Founder",
          src: "ID FRESH FOOD INDIA PVT. LTD..jpg",
          logo: "ID FRESH FOOD INDIA PVT. LTD-logo.jpg",
        },
        {
          name: "Satyendra Johari",
          company: "Johari Digital Healthcare Ltd.",
          designation: "Chairman and MD",
          src: "JOHARI DIGITAL HEALTHCARE LTD.jpg",
          logo: "JOHARI DIGITAL HEALTHCARE LTD-logo.jpg",
        }
     
      ];

  return (
    <div>
      {/* <div className=" flex w-full py-20   from-slate-600 to-sky-300   glass   pl-5 mt-4">
        <h1 className="md:text-5xl 2xl:text-6xl font-bold md:ml-14 2xl:ml-14  ">Our Supporters</h1>
        <HandHelping className="w-16 h-16" />
      </div> */}
<HeaderDesign title='Our Supporters' Logo={HandHeart} />

        <div className='grid m-20 grid-cols-4 2xl:grid-cols-5 items-baseline 2xl:pl-32 '>
       
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                  ))}
            
            
        </div>
        
        </div>

  )
}

export default MemeberDirectory