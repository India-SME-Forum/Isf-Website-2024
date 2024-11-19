import React from "react";
import { useState,useRef,useEffect } from "react";
const categoriesArray = [
  {
    section: "About Us",
    subsections: [
      {
        title: "About ISF",
        categories: ["Objectives", "Role & Activities", "Achievements"],
      },
      {
        title: "Management & Advisory Board",
        categories: [
          "Advisory Board",
          "Management Board",
          "Experts & Contributors",
          "National Entrepreneurial & Economic Development Council",
          "Empowered Committees",
          "Director General & Secretariat",
        ],
      },
      {
        title: "Partners & Alliances",
        categories: [
          "Corporates",
          "Institutions",
          "International Alliances & Partners",
          "Industrial & Cluster Associations",
        ],
      },
      {
        title: "Press",
        categories: [
          "Media Kit",
          "Branding Identity Guidelines",
          "Logo, Banner and Other items",
          "Press Releases",
          "ISF In The Media",
        ],
      },
      {
        title: "Chapters",
        categories: [
          "Why Chapters",
          "Form a Chapter",
          "Find a Chapter or Join One",
        ],
      },
      {
        title: "Careers",
        categories: [
          "Job Openings",
          "Internships Programme",
          "Volunteers Programme",
        ],
      },
      {
        title: "Contact",
        categories: ["ISF Secretariat", "Helpdesk", "Contact Form"],
      },
    ],
  },
  {
    section: "Members",
    subsections: [
      {
        title: "Small & Medium Industry Owners",
        categories: [
          "Membership",
          "Membership Benefits & Categories",
          "Join/Renew your membership",
          "Join/Update your details",
          "Frequently Asked Questions",
          "Log In",
        ],
      },
      {
        title: "Corporates & MNCs",
        categories: [
          "Membership",
          "Membership Benefits & Categories",
          "Join/Renew your membership",
          "Join/Update your details",
          "Frequently Asked Questions",
        ],
      },
    ],
  },
  {
    section: "Initiatives",
    subsections: [
      {
        title: "Ecosystem Development Programs",
        categories: [
          "Women Entrepreneurs - Shakti",
          "Entrepreneur Mentoring Program",
          "Manufacturing Cluster Infrastructure & Market Development",
          "Entrepreneurship Research & Skill Development",
          "International Entrepreneur Exchange",
          "Enabling Innovative Technology & Manufacturing Startups",
          "Skills Identification Training & Employment Program",
        ],
      },
      {
        title: "Knowledge Sharing Meets",
        categories: [
          "SME Leadership Series",
          "Secrets of Success for SMB",
          "SME Technovation Forum",
          "SME Knowledge Interchange",
          "SME Knowledge Summiton Banking and Finance",
          "SME Loan Mela",
          "SME Exporters Forum",
          "BizFest",
          "Udyog MahaMela",
          "Fund Fest",
          "WE - Shakti Women Entrepreneur Forum",
        ],
      },
      {
        title: "Recognition",
        categories: [
          "India SME 100 Awards",
          "India's Small Giants",
          "Emerging Women Entrepreneur Awards (EWE)",
          "SME Technovation Awards",
          "Top99Startups",
          "Global Indian Entrepreneur of The Year Awards",
        ],
      },
    ],
  },
  {
    section: "Business Resources",
    subsections: [
      {
        title: "Startups",
        categories: [
          "Planning New Business",
          "Business Analytics & Planning",
          "Regulatory & Formation",
          "Business Intelligence, Sector Scanning & Competitive Analysis",
          "Business Process Management & Operations",
          "Funding, Subsidies and Incentives",
          "Customer Relationship management",
          "Seed and Venture Funds",
          "Incentives for Startups",
        ],
      },
      {
        title: "Existing Business",
        categories: [
          {
            category: "Managing Business",
            subcategories: [
              "Finance",
              "Accounts & Taxation",
              "Legal",
              "Marketing & Branding",
              "Human Resource",
              "Technology absorption",
              "General Management",
              "Profitability",
            ],
          },
        ],
      },
      {
        title: "Assess your Business",
        categories: [
          "Profitability",
          "Valuation",
          "Customer Orientation",
          "Quality",
          "Innovation",
          "People Capital",
          "Marketing",
          "Brand & Business Valuation",
          "Funding",
          "Corporate Governance",
        ],
      },
      {
        title: "Growing Your Business",
        categories: [
          "Market Analysis & Planning",
          "Business Process Management",
        ],
      },
      {
        title: "News, Advisories & Articles",
        categories: [
          "Latest News",
          "Market Intelligence",
          "Regulatory, Formation, Customs & Excise and Taxation",
          "Venture & Equity Funding",
          "Banking, Finance & Fiscal Discipline",
          "Branding, Marketing, Research & Business Development",
          "People Management & Development",
          "Customer Relationship & Experience Management",
          "Innovation, Technology Absorption for Growth",
          "Quality Management System",
          "International Opportunities, Technology Transfers & Joint Ventures",
          "Subsidies & Incentives for SMEs",
          "Intellectual Property Rights",
          "Startups",
          "FAQs and Articles",
        ],
      },
      {
        title: "Discussion Forum & Interactions",
        categories: ["Discussion Forum", "Web Cast"],
      },
      {
        title: "Women Enterprises Empowerment Desk",
        categories: [
          "Objectives of WEEDs",
          "Benefits of WEEDs",
          "Unique Characteristics of WEEDs",
        ],
      },
      {
        title: "Innovative Business Incubation Program",
        categories: [
          "Objectives of IBIPs",
          "Benefits of IBIPs",
          "Unique Characteristics of IBIPs",
        ],
      },
      {
        title: "Family Business Mentor Program",
        categories: [
          "Objectives of FBMPs",
          "Benefits of FBMPs",
          "Unique Characteristics of FBMPs",
        ],
      },
      {
        title: "SME Experts & Advisors Consortium",
        categories: [
          "Advisors & Consultants",
          "Consultants In Debt, Equity & Venture Finance",
          "Consultants In Accounts & Taxation",
          "Consultants In Legal",
          "Consultants In Marketing & Branding",
          "Consultants In Human Resource",
          "Consultants In Technology",
          "Search For Consultants - By Industry, Location or Expertise",
        ],
      },
    ],
  },
  {
    section: "Publications & Mailers",
    subsections: [
      {
        title: "Business Wise Our Monthly Magazine",
        categories: [
          "Contents",
          "Annual Subscriptions",
          "Advertising Opportunity",
          "Submit your Manuscripts / Papers",
        ],
      },
      {
        title: "Newsletter & EDMs",
        categories: [
          "SME UPDATE",
          "Subscribe Your Email",
          "Online Mailers",
          "Code of Ethics",
          "Reports",
          "Online Directory",
        ],
      },
      {
        title: "India Sme Forum Members Directory",
        categories: ["Update your Profile"],
      },
      {
        title: "Official Portal",
        categories: ["Marketplace", "Finance", "Invest", "Jobs", "Club 9"],
      },
    ],
  },
];

const Navbar = () => {
  const [mobNavOpen, setMobNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderCategories = (categories) => {
    return categories.map((category, idx) => {
      if (typeof category === 'string') {
        return (
          <li key={idx}>
            <a>{category}</a>
          </li>
        );
      } else {
        return (
          <li key={idx} className="group/category relative">
            <a>{category.category}</a>
            <ul className="absolute left-0 top-full opacity-0 invisible 
                           group-hover/category:opacity-100 group-hover/category:visible 
                           transition-all duration-300 
                           bg-base-100 rounded-box p-2 shadow-lg z-10">
              {category.subcategories.map((subCat, subIdx) => (
                <li key={subIdx}>
                  <a>{subCat}</a>
                </li>
              ))}
            </ul>
          </li>
        );
      }
    });
  };

  return (
    <div ref={navRef} className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label 
            tabIndex={0} 
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobNav(!mobNavOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          
          {mobNavOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
              {categoriesArray.map((section, index) => (
                <li key={index}>
                  <details>
                    <summary>{section.section}</summary>
                    <ul>
                      {section.subsections.map((subsection, subIndex) => (
                        <li key={subIndex}>
                          <details>
                            <summary>{subsection.title}</summary>
                            <ul>
                              {renderCategories(subsection.categories)}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <a className="btn btn-ghost">
          <img
            src="/isf_new_logo_2024.jpg"
            alt="ISF Logo"
            className="h-8"
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {categoriesArray.map((section, index) => (
            <li key={index} className="group relative">
              <a className="font-medium">{section.section}</a>
              <ul className="absolute left-0 top-full opacity-0 invisible 
                             group-hover:opacity-100 group-hover:visible 
                             transition-all duration-300 
                             bg-base-100 w-48 rounded-box p-2 shadow-lg z-10">
                {section.subsections.map((subsection, subIndex) => (
                  <li key={subIndex} className="group/subsection relative">
                    <a>{subsection.title}</a>
                    <ul className="absolute left-full top-0 opacity-0 invisible 
                                   group-hover/subsection:opacity-100 group-hover/subsection:visible 
                                   transition-all duration-300 
                                   bg-base-100 w-48 rounded-box p-2 shadow-lg -mt-2 z-10">
                      {renderCategories(subsection.categories)}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
};

export default Navbar;