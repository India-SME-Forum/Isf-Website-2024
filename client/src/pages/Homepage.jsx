import React, { Suspense } from "react";

 

const MemberCarousel = React.lazy(() => import("../components/MemberCarousel"));
const OurSupporters = React.lazy(() => import("../components/OurSupporters"));
const NewsXblogs = React.lazy(() => import("../components/NewsXblogs"));
const MembershipBenefits = React.lazy(() =>
  import("../components/Memberbenefits")
);
const MembershipBanner = React.lazy(() =>
  import("../components/MembershipBanner")
);
const MembershipStats = React.lazy(() => import("../components/StatsMemeber"));
const SocialMediaBanner = React.lazy(() => import("../components/Socials"));
const Footer = React.lazy(() => import("../components/Footer"));
const Hero = React.lazy(() => import("../components/Hero"));
const PartnerCarousel = React.lazy(() => import("../components/Partners"));

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">        
        <Hero />
        <MembershipBanner />
        <MembershipStats />
        {/* <OurSupporters/>
         */}
        <MemberCarousel />
        {/* <NewsXblogs /> */}
        <PartnerCarousel />
        {/* <MembershipBenefits /> */}
        <SocialMediaBanner />
        <Footer />
      
    </div>
  );
};

export default Homepage;
