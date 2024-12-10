import React from 'react'
import { ChevronDown } from 'lucide-react';
import {Link} from 'react-router-dom';

export const NewNavBar = () => {

    const categories = [
        {
          section: "About Us",
          subsections: [
            {
              title: "About ISF",
              categories: [
                { name: "Objectives", url: "/about-us/objectives" },
                { name: "Role & Activities", url: "/about-us/role-activities" },
                { name: "Achievements", url: "/about-us/achievements" },
              ],
            },
            {
              title: "Management & Advisory Board",
              categories: [
                { name: "Advisory Board", url: "/about-us/advisory-board" },
                { name: "Management Board", url: "/about-us/management-board" },
                { name: "Experts & Contributors", url: "/about-us/experts-contributors" },
                {
                  name: "National Entrepreneurial & Economic Development Council",
                  url: "/about-us/national-entrepreneurial-council",
                },
                { name: "Empowered Committees", url: "/about-us/empowered-committees" },
                { name: "Director General & Secretariat", url: "/about-us/director-general" },
              ],
            },
            {
              title: "Partners & Alliances",
              categories: [
                { name: "Corporates", url: "/about-us/partners/corporates" },
                { name: "Institutions", url: "/about-us/partners/institutions" },
                {
                  name: "International Alliances & Partners",
                  url: "/about-us/partners/international",
                },
                {
                  name: "Industrial & Cluster Associations",
                  url: "/about-us/partners/industrial-cluster",
                },
              ],
            },
            {
              title: "Press",
              categories: [
                { name: "Media Kit", url: "/about-us/press/media-kit" },
                { name: "Branding Identity Guidelines", url: "/about-us/press/branding" },
                { name: "Logo, Banner and Other items", url: "/about-us/press/logos" },
                { name: "Press Releases", url: "/about-us/press/releases" },
                { name: "ISF In The Media", url: "/about-us/press/media" },
              ],
            },
            {
              title: "Chapters",
              categories: [
                { name: "Why Chapters", url: "/about-us/chapters/why" },
                { name: "Form a Chapter", url: "/about-us/chapters/form" },
                { name: "Find a Chapter or Join One", url: "/about-us/chapters/join" },
              ],
            },
          ],
        },
        {
          section: "Members",
          subsections: [
            {
              title: "Small & Medium Industry Owners",
              categories: [
                { name: "Membership", url: "/members/sme/membership" },
                {
                  name: "Membership Benefits & Categories",
                  url: "/members/sme/benefits-categories",
                },
                { name: "Join/Renew your membership", url: "/members/sme/join-renew" },
                { name: "Join/Update your details", url: "/members/sme/update-details" },
                { name: "Frequently Asked Questions", url: "/members/sme/faq" },
                { name: "Log In", url: "/members/sme/login" },
              ],
            },
            {
              title: "Corporates & MNCs",
              categories: [
                { name: "Membership", url: "/members/corporates/membership" },
                {
                  name: "Membership Benefits & Categories",
                  url: "/members/corporates/benefits-categories",
                },
                { name: "Join/Renew your membership", url: "/members/corporates/join-renew" },
                { name: "Join/Update your details", url: "/members/corporates/update-details" },
                { name: "Frequently Asked Questions", url: "/members/corporates/faq" },
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
                { name: "Women Entrepreneurs - Shakti", url: "/initiatives/shakti" },
                {
                  name: "Entrepreneur Mentoring Program",
                  url: "/initiatives/mentoring-program",
                },
                {
                  name: "Manufacturing Cluster Infrastructure & Market Development",
                  url: "/initiatives/cluster-development",
                },
                {
                  name: "Entrepreneurship Research & Skill Development",
                  url: "/initiatives/skill-development",
                },
                {
                  name: "International Entrepreneur Exchange",
                  url: "/initiatives/international-exchange",
                },
                {
                  name: "Enabling Innovative Technology & Manufacturing Startups",
                  url: "/initiatives/technology-startups",
                },
                {
                  name: "Skills Identification Training & Employment Program",
                  url: "/initiatives/training-employment",
                },
              ],
            },
            {
              title: "Knowledge Sharing Meets",
              categories: [
                { name: "SME Leadership Series", url: "/initiatives/leadership-series" },
                { name: "Secrets of Success for SMB", url: "/initiatives/success-secrets" },
                {
                  name: "SME Technovation Forum",
                  url: "/initiatives/technovation-forum",
                },
                { name: "SME Knowledge Interchange", url: "/initiatives/knowledge-interchange" },
                {
                  name: "SME Knowledge Summit on Banking and Finance",
                  url: "/initiatives/banking-finance",
                },
              ],
            },
            {
              title: "Recognition",
              categories: [
                { name: "India SME 100 Awards", url: "/initiatives/awards/sme-100" },
                { name: "India's Small Giants", url: "/initiatives/awards/small-giants" },
              ],
            },
          ],
        },
      ];
      
      return (
        <div>
            <nav className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {categories.map((section) => (
                  <li key={section.section} className="menu-title">
                    <span>{section.section}</span>
                    {section.subsections.map((subsection) => (
                      <ul key={subsection.title}>
                        {subsection.categories.map((category) => (
                          <li key={category.name}>
                            <Link to={category.url}>{category.name}</Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">My App</Link>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal dropdown-content px-1">
              {categories.map((section) => (
                <li key={section.section} className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    {section.section}
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {section.subsections.map((subsection) => (
                      <li key={subsection.title} className="menu-title">
                        <span>{subsection.title}</span>
                        {subsection.categories.map((category) => (
                          <Link 
                            key={category.name} 
                            to={category.url} 
                            className="hover:bg-base-200 px-4 py-2 rounded"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="navbar-end">
            <a className="btn btn-primary">Get Started</a>
          </div>
        </nav>
        </div>
        
      )
    }

