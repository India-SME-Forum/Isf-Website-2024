import React from "react";
import { useState, useRef, useEffect } from "react";
import { navbarFetch } from "../services/navbarFetch";
import { useQuery } from "@tanstack/react-query";


// const categoriesArray = await navbarFetch() || []

const Navbar = () => {
const {data,isError,isLoading,isFetched,refetch,error} = useQuery({
  queryKey:['list-navbar'],
  queryFn:navbarFetch
})

const categoriesArray = data || [];

  const [mobNavOpen, setMobNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current?.contains(event.target)) {
        setMobNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderCategories = (categories) => {
 
    return categories?.map((category, idx) => {
     
      
      if (typeof category === "string") {    
        return (
          
          <li className="hover:bg-accent rounded-lg" key={idx}>
            <a href={category?.url}>{category} </a>
          </li>
        );
      } else {
        
        return (
          <li
            key={idx}
            className="group/category rounded-lg hover:bg-accent relative"
          >
            <a href={category?.url}>{category?.category}</a>
       {category.subcategories[0]&&(     <ul
              className="absolute ml-[190px] opacity-0 invisible 
                           group-hover/category:opacity-100 group-hover/category:visible 
                           transition-all duration-300 
                           bg-base-100 rounded-box p-2 shadow-lg z-10"
            >
              {category?.subcategories?.map((subCat, subIdx) => (
                <li className="hover:bg-accent rounded-lg" key={subIdx}>
                  <a href={subCat?.url}>{subCat?.category}</a>
                </li>
              ))}
            </ul>)}
          </li>
        );
      }
    });
  };
  
  

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
    <div
      ref={navRef}
      className="navbar z-50 2xl:px-40 2xl:py-2 p-0 bg-base-100 shadow-xl">
      <div className="navbar-start  z-50">
        <div className="dropdown z-50">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobNav(!mobNavOpen)}>
            <svg
              xmlns="http://www?.w3?.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {mobNavOpen  && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-96"
            >
              {categoriesArray?.map((section, index) => (
                <li key={index}>
                  <details>
                    <summary>{section?.section}</summary>
                    <ul>
                      {section?.subsections?.map((subsection, subIndex) => (
                        <li key={subIndex}>
                          <details>
                            <summary>{subsection?.title}</summary>
                            <ul>{renderCategories(subsection?.categories)}</ul>
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
        <a className="cursor-pointer min-h-8 h-full duration-200 transition-all">
          <img
            src="/isf_new_logo_2024.jpg"
            alt="ISF Logo"
            className="w-[50%] h-[50%] mx-5 object-fill"
          />
        </a>
      </div>

      <div className="navbar-center h-full hidden lg:flex">
        <ul className="menu menu-horizontal  h-full px-1">
          {isFetched && categoriesArray?.map((section, index) => (
            <li
              key={index}
              className="group relative h-full mx-[2px] my-[5px] "
            >
              <a
                href="#"
                className="transition-all border-b-4 border-transparent hover:bg-cyan-300 hover:border-b-4 hover:border-cyan-700  duration-100 rounded-none font-medium"
              >
                {section?.section}
              </a>
              <ul
                className="absolute left-0 top-full opacity-0 invisible 
                             group-hover:opacity-100 group-hover:visible 
                             transition-all duration-300 
                             bg-base-100 w-48 rounded-box p-2 shadow-lg z-10"
              >
                {section?.subsections?.map((subsection, subIndex) => (
                  <li
                    key={subIndex}
                    className="group/subsection hover:bg-accent rounded-lg relative"
                  >
                    <a href="#">{subsection?.title}</a>
                    <ul
                      className="absolute left-full top-0 opacity-0 invisible 
                                   group-hover/subsection:opacity-100 group-hover/subsection:visible 
                                   transition-all duration-300 
                                   bg-base-100 w-48 rounded-box p-2 shadow-lg mt-2 z-10"
                    >
                      {renderCategories(subsection?.categories)}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end z-10">
        <a className="btn hover:bg-accent  hover:text-black 500 btn-outline btn-xs md:btn-md 2xl:btn-md backdrop-blur-sm shadow-xl">
          Member Portal
        </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;