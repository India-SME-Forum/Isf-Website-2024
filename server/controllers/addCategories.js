import asyncHandler from "express-async-handler";
import categoryModel from "../models/navbarSchema.js";
import { addCategoryValidationSchema } from "../validations/navValidation.js";

const categoriesArray = [
  {
    section: "About Us",
    subsections: [
      {
        title: "About ISF",
        categories: [
          { category: "Objectives", url: "/about/objectives" },
          { category: "Role & Activities", url: "/about/role-activities" },
          { category: "Achievements", url: "/about/achievements" },
        ],
      },
      {
        title: "Management & Advisory Board",
        categories: [
          { category: "Advisory Board", url: "/management/advisory-board" },
          { category: "Management Board", url: "/management/management-board" },
          {
            category: "Experts & Contributors",
            url: "/management/experts-contributors",
          },
          {
            category: "National Entrepreneurial & Economic Development Council",
            url: "/management/ne-edc",
          },
          {
            category: "Empowered Committees",
            url: "/management/empowered-committees",
          },
          {
            category: "Director General & Secretariat",
            url: "/management/director-general-secretariat",
          },
        ],
      },
      {
        title: "Partners & Alliances",
        categories: [
          { category: "Corporates", url: "/partners/corporates" },
          { category: "Institutions", url: "/partners/institutions" },
          {
            category: "International Alliances & Partners",
            url: "/partners/international-alliances",
          },
          {
            category: "Industrial & Cluster Associations",
            url: "/partners/cluster-associations",
          },
        ],
      },
      {
        title: "Press",
        categories: [
          { category: "Media Kit", url: "/press/media-kit" },
          {
            category: "Branding Identity Guidelines",
            url: "/press/branding-guidelines",
          },
          {
            category: "Logo, Banner and Other items",
            url: "/press/logo-banner",
          },
          { category: "Press Releases", url: "/press/press-releases" },
          { category: "ISF In The Media", url: "/press/isf-in-media" },
        ],
      },
      {
        title: "Chapters",
        categories: [
          { category: "Why Chapters", url: "/chapters/why-chapters" },
          { category: "Form a Chapter", url: "/chapters/form-chapter" },
          {
            category: "Find a Chapter or Join One",
            url: "/chapters/find-or-join",
          },
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
          { category: "Membership", url: "/members/small-medium/membership" },
          {
            category: "Membership Benefits & Categories",
            url: "/members/small-medium/benefits-categories",
          },
          {
            category: "Join/Renew your membership",
            url: "/members/small-medium/join-renew",
          },
          {
            category: "Join/Update your details",
            url: "/members/small-medium/join-update",
          },
          {
            category: "Frequently Asked Questions",
            url: "/members/small-medium/faq",
          },
          { category: "Log In", url: "/members/small-medium/login" },
        ],
      },
      {
        title: "Corporates & MNCs",
        categories: [
          { category: "Membership", url: "/members/corporates/membership" },
          {
            category: "Membership Benefits & Categories",
            url: "/members/corporates/benefits-categories",
          },
          {
            category: "Join/Renew your membership",
            url: "/members/corporates/join-renew",
          },
          {
            category: "Join/Update your details",
            url: "/members/corporates/join-update",
          },
          {
            category: "Frequently Asked Questions",
            url: "/members/corporates/faq",
          },
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
          {
            category: "Women Entrepreneurs - Shakti",
            url: "/initiatives/shakti",
          },
          {
            category: "Entrepreneur Mentoring Program",
            url: "/initiatives/mentoring-program",
          },
          {
            category:
              "Manufacturing Cluster Infrastructure & Market Development",
            url: "/initiatives/manufacturing-cluster",
          },
          {
            category: "Entrepreneurship Research & Skill Development",
            url: "/initiatives/entrepreneurship-research",
          },
          {
            category: "International Entrepreneur Exchange",
            url: "/initiatives/entrepreneur-exchange",
          },
          {
            category: "Enabling Innovative Technology & Manufacturing Startups",
            url: "/initiatives/technology-startups",
          },
          {
            category: "Skills Identification Training & Employment Program",
            url: "/initiatives/skills-training",
          },
        ],
      },
      {
        title: "Knowledge Sharing Meets",
        categories: [
          {
            category: "SME Leadership Series",
            url: "/initiatives/sme-leadership-series",
          },
          {
            category: "Secrets of Success for SMB",
            url: "/initiatives/success-for-smb",
          },
          {
            category: "SME Technovation Forum",
            url: "/initiatives/sme-technovation",
          },
          {
            category: "SME Knowledge Interchange",
            url: "/initiatives/sme-knowledge-interchange",
          },
          {
            category: "SME Knowledge Summiton Banking and Finance",
            url: "/initiatives/sme-finance-summit",
          },
          { category: "SME Loan Mela", url: "/initiatives/sme-loan-mela" },
          {
            category: "SME Exporters Forum",
            url: "/initiatives/sme-exporters-forum",
          },
          { category: "BizFest", url: "/initiatives/bizfest" },
          { category: "Udyog MahaMela", url: "/initiatives/udyog-mahamela" },
          { category: "Fund Fest", url: "/initiatives/fund-fest" },
          {
            category: "WE - Shakti Women Entrepreneur Forum",
            url: "/initiatives/we-shakti",
          },
        ],
      },
      {
        title: "Recognition",
        categories: [
          {
            category: "India SME 100 Awards",
            url: "/initiatives/sme-100-awards",
          },
          {
            category: "India's Small Giants",
            url: "/initiatives/small-giants",
          },
          {
            category: "Emerging Women Entrepreneur Awards (EWE)",
            url: "/initiatives/ewe-awards",
          },
          {
            category: "SME Technovation Awards",
            url: "/initiatives/sme-technovation-awards",
          },
          { category: "Top99Startups", url: "/initiatives/top99startups" },
          {
            category: "Global Indian Entrepreneur of The Year Awards",
            url: "/initiatives/global-indian-entrepreneur-awards",
          },
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
          {
            category: "Planning New Business",
            url: "/resources/startups/planning-business",
          },
          {
            category: "Business Analytics & Planning",
            url: "/resources/startups/analytics-planning",
          },
          {
            category: "Regulatory & Formation",
            url: "/resources/startups/regulatory-formation",
          },
          {
            category:
              "Business Intelligence, Sector Scanning & Competitive Analysis",
            url: "/resources/startups/business-intelligence",
          },
          {
            category: "Business Process Management & Operations",
            url: "/resources/startups/business-operations",
          },
          {
            category: "Funding, Subsidies and Incentives",
            url: "/resources/startups/funding-subsidies",
          },
          {
            category: "Customer Relationship management",
            url: "/resources/startups/crm",
          },
          {
            category: "Seed and Venture Funds",
            url: "/resources/startups/seed-funds",
          },
          {
            category: "Incentives for Startups",
            url: "/resources/startups/incentives",
          },
        ],
      },
      {
        title: "Existing Business",
        categories: [
          {
            category: "Managing Business",
            subcategories: [
              { category: "Finance", url: "/resources/existing/finance" },
              {
                category: "Accounts & Taxation",
                url: "/resources/existing/accounts-taxation",
              },
              { category: "Legal", url: "/resources/existing/legal" },
              {
                category: "Marketing & Branding",
                url: "/resources/existing/marketing-branding",
              },
              { category: "Human Resource", url: "/resources/existing/hr" },
              {
                category: "Technology absorption",
                url: "/resources/existing/technology-absorption",
              },
              {
                category: "General Management",
                url: "/resources/existing/general-management",
              },
              {
                category: "Profitability",
                url: "/resources/existing/profitability",
              },
            ],
          },
        ],
      },
      {
        title: "Assess your Business",
        categories: [
          { category: "Profitability", url: "/resources/assess/profitability" },
          { category: "Valuation", url: "/resources/assess/valuation" },
          {
            category: "Customer Orientation",
            url: "/resources/assess/customer-orientation",
          },
          { category: "Quality", url: "/resources/assess/quality" },
          { category: "Innovation", url: "/resources/assess/innovation" },
          {
            category: "People Capital",
            url: "/resources/assess/people-capital",
          },
          { category: "Marketing", url: "/resources/assess/marketing" },
          {
            category: "Brand & Business Valuation",
            url: "/resources/assess/brand-business-valuation",
          },
          { category: "Funding", url: "/resources/assess/funding" },
          {
            category: "Corporate Governance",
            url: "/resources/assess/governance",
          },
        ],
      },
      {
        title: "Growing Your Business",
        categories: [
          {
            category: "Market Analysis & Planning",
            url: "/resources/growing/market-planning",
          },
          {
            category: "Business Process Management",
            url: "/resources/growing/business-process",
          },
        ],
      },
      {
        title: "News, Advisories & Articles",
        categories: [
          { category: "Latest News", url: "/resources/news/latest-news" },
          {
            category: "Market Intelligence",
            url: "/resources/news/market-intelligence",
          },
          {
            category: "Regulatory, Formation, Customs & Excise and Taxation",
            url: "/resources/news/regulatory-formation",
          },
          {
            category: "Venture & Equity Funding",
            url: "/resources/news/venture-equity-funding",
          },
          {
            category: "Banking, Finance & Fiscal Discipline",
            url: "/resources/news/banking-finance",
          },
          {
            category: "Branding, Marketing, Research & Business Development",
            url: "/resources/news/branding-marketing",
          },
          {
            category: "People Management & Development",
            url: "/resources/news/people-management",
          },
          {
            category: "Customer Relationship & Experience Management",
            url: "/resources/news/crm",
          },
          {
            category: "Innovation, Technology Absorption for Growth",
            url: "/resources/news/innovation-technology",
          },
          {
            category: "Quality Management System",
            url: "/resources/news/quality-management",
          },
          {
            category:
              "International Opportunities, Technology Transfers & Joint Ventures",
            url: "/resources/news/international-opportunities",
          },
          {
            category: "Subsidies & Incentives for SMEs",
            url: "/resources/news/subsidies-incentives",
          },
          {
            category: "Intellectual Property Rights",
            url: "/resources/news/ip-rights",
          },
          { category: "Startups", url: "/resources/news/startups" },
          {
            category: "FAQs and Articles",
            url: "/resources/news/faqs-articles",
          },
        ],
      },
      {
        title: "Discussion Forum & Interactions",
        categories: [
          { category: "Discussion Forum", url: "/resources/forum/discussion" },
          { category: "Web Cast", url: "/resources/forum/webcast" },
        ],
      },
      {
        title: "Women Enterprises Empowerment Desk",
        categories: [
          {
            category: "Objectives of WEEDs",
            url: "/resources/weeds/objectives",
          },
          { category: "Benefits of WEEDs", url: "/resources/weeds/benefits" },
          {
            category: "Unique Characteristics of WEEDs",
            url: "/resources/weeds/characteristics",
          },
        ],
      },
      {
        title: "Innovative Business Incubation Program",
        categories: [
          {
            category: "Objectives of IBIPs",
            url: "/resources/ibips/objectives",
          },
          { category: "Benefits of IBIPs", url: "/resources/ibips/benefits" },
          {
            category: "Unique Characteristics of IBIPs",
            url: "/resources/ibips/characteristics",
          },
        ],
      },
      {
        title: "Family Business Mentor Program",
        categories: [
          {
            category: "Objectives of FBMPs",
            url: "/resources/fbmps/objectives",
          },
          { category: "Benefits of FBMPs", url: "/resources/fbmps/benefits" },
          {
            category: "Unique Characteristics of FBMPs",
            url: "/resources/fbmps/characteristics",
          },
        ],
      },
      {
        title: "SME Experts & Advisors Consortium",
        categories: [
          {
            category: "Advisors & Consultants",
            url: "/resources/experts/advisors-consultants",
          },
          {
            category: "Consultants In Debt, Equity & Venture Finance",
            url: "/resources/experts/debt-equity-consultants",
          },
          {
            category: "Consultants In Accounts & Taxation",
            url: "/resources/experts/accounts-taxation",
          },
          {
            category: "Consultants In Legal",
            url: "/resources/experts/legal-consultants",
          },
          {
            category: "Consultants In Marketing & Branding",
            url: "/resources/experts/marketing-branding",
          },
          {
            category: "Consultants In Human Resource",
            url: "/resources/experts/hr-consultants",
          },
          {
            category: "Consultants In Technology",
            url: "/resources/experts/technology-consultants",
          },
          {
            category:
              "Search For Consultants - By Industry, Location or Expertise",
            url: "/resources/experts/search-consultants",
          },
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
          { category: "Contents", url: "/publications/magazine/contents" },
          {
            category: "Annual Subscriptions",
            url: "/publications/magazine/subscriptions",
          },
          {
            category: "Advertising Opportunity",
            url: "/publications/magazine/advertising",
          },
          {
            category: "Submit your Manuscripts / Papers",
            url: "/publications/magazine/submit-papers",
          },
        ],
      },
      {
        title: "Newsletter & EDMs",
        categories: [
          {
            category: "SME UPDATE",
            url: "/publications/newsletter/sme-update",
          },
          {
            category: "Subscribe Your Email",
            url: "/publications/newsletter/subscribe",
          },
          {
            category: "Online Mailers",
            url: "/publications/newsletter/online-mailers",
          },
          {
            category: "Code of Ethics",
            url: "/publications/newsletter/code-ethics",
          },
          { category: "Reports", url: "/publications/newsletter/reports" },
          {
            category: "Online Directory",
            url: "/publications/newsletter/online-directory",
          },
        ],
      },
      {
        title: "India Sme Forum Members Directory",
        categories: [
          {
            category: "Update your Profile",
            url: "/publications/directory/update-profile",
          },
        ],
      },
      {
        title: "Official Portal",
        categories: [
          { category: "Marketplace", url: "/publications/portal/marketplace" },
          { category: "Finance", url: "/publications/portal/finance" },
          { category: "Invest", url: "/publications/portal/invest" },
          { category: "Jobs", url: "/publications/portal/jobs" },
          { category: "Club 9", url: "/publications/portal/club9" },
        ],
      },
    ],
  },
  {
    section: "Careers",
    subsections: [
      {
        title: "Recruitment",
        categories: [
          { category: "Job Openings", url: "/careers/job-openings" },
          { category: "Internships Programme", url: "/careers/internships" },
          { category: "Volunteers Programme", url: "/careers/volunteers" },
        ],
      },
    ],
  },
  {
    section: "Contact",
    subsections: [
      {
        title: "Contact Us",
        categories: [
          { category: "ISF Secretariat", url: "/contact/isf-secretariat" },
          { category: "Helpdesk", url: "/contact/helpdesk" },
          { category: "Contact Form", url: "/contact/form" },
        ],
      },
    ],
  },
];

// Bulk categoryAdd

export const addCategories = asyncHandler(async (req, res) => {
  console.log("incoming data", req.body);

  try {
    const category = await categoryModel.insertMany(categoriesArray);
    res.status(200).json("added successfully : ", category);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Fetch all categories
export const getCategories = asyncHandler(async (req, res) => {
  try {
    const category = await categoryModel.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//! Add New single category
export const addSingleCategory = asyncHandler(async (req, res,next) => {
  const joiresp = addCategoryValidationSchema.validate(req.body);
  console.log("joi response: ", joiresp);
  const { section, subsectionTitle, categories } = req.body;
  try {
    console.log("request body: ", req.body);
    const FindSection = await categoryModel
      .findOne({ section })
      .then((data) => {
        data.subsections
          .find((element) => element.title === subsectionTitle) 
          .categories.push(categories);
        // data.save();                  //!saving data to db
        return data;
      })
      console.log("FindSection: ", FindSection);
    res.status(200).json("success");
  } catch (error) {
   next(error)
  }
});
//! Add new subsection to section
export const addNewSubsection = asyncHandler(async (req, res) => {
  try {
    const { section, subsectionTitle,categories } = req.body;
    const FindSection = await categoryModel
      .findOne({ section })
      .then((data) => {
        if(data.subsections.find((element)=>element.title === subsectionTitle)){
          console.log('Subsection already exists: ', subsectionTitle);
          
          return data
        }        

       data?.subsections.push({title:subsectionTitle,categories});
       //!pushing new subsection PENDING
        data.save(); //saving data to db
        return data;
      });
console.log('findSection',FindSection);

    res.status(200).json("success");
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
