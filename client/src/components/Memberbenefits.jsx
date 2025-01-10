import React from "react";

const MembershipBenefits = () => {
  return (
    <div className="absolute bg-base-300 py-10 px-4 md:px-10 text-center shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-4xl   mb-4">
        MEMBERSHIP HAS ITS BENEFITS
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Which BeneFITs plan is best for you? What are you looking to gain from
        your Chamber membership? How active do you want to be? Who do you want
        to build relationships with? Each plan offers its own features and
        services, along with all the things available to all Chamber members, at
        a price to suit your individual budget.
      </p>
      <button className="btn btn-active z-10 shadow-md hover:scale-105 bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white px-6 py-2  transition-all">
        LEARN MORE
      </button>
    </div>
  );
};

export default MembershipBenefits;
