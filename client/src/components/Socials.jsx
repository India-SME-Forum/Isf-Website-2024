import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SocialMediaBanner = () => {
  const socialMediaLinks = [
    { icon: FaFacebook, color: "text-blue-500", link: "https://www.facebook.com/IndiaSMEforum/" },
    { icon: FaTwitter, color: "text-blue-400", link: "https://twitter.com/SMEForumIndia" },
    { icon: FaYoutube, color: "text-red-500", link: "https://www.youtube.com/@TheINDIASMEFORUM" },
    { icon: FaLinkedin, color: "text-blue-600", link: "https://in.linkedin.com/company/india-sme-forum" },
    { icon: FaInstagram, color: "text-pink-500", link: "https://www.instagram.com/indiasmeforum/" },
  ];

  return (
    <div className="bg-gray-800 z-30  py-4 px-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-base-300 text-center  mb-6">
        Connect on Social Media
      </h2>
      <div className="flex justify-center space-x-4">
        {socialMediaLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`text-4xl ${item.color} hover:scale-110 transition-transform`}
          >
            <item.icon className="w-12 z-20 mx-5 h-12" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaBanner;