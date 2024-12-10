import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import MembershipBanner from "../components/MembershipBanner";
import MembershipStats from "../components/StatsMemeber";
import NewsXblogs from "../components/NewsXblogs";
import PartnerCarousel from "../components/Partners";
import SocialMediaBanner from "../components/Socials";
import Footer from "../components/Footer";
import MembershipBenefits from "../components/Memberbenefits";
import OurSupporters from "../components/OurSupporters";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden" >
      <Navbar  />
      <Hero />
      <MembershipBanner />
      <MembershipStats />
      <OurSupporters/>
      <NewsXblogs />
      <PartnerCarousel />
      <MembershipBenefits />
      <SocialMediaBanner />
      <Footer />
    </div>
  );
};

export default Homepage;
