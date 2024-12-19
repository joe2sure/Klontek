import React, { lazy, Suspense } from "react";
import Hero from './Hero/Hero.jsx';
import AboutSection from "./AboutSection/aboutSection.jsx";
import BrowseCourses from "./Courses/BrowseCourses.jsx";
import Service from "./Service/Service.jsx";
import {
  ServicesData, PortfolioData, WhyChooseUsData,
  homeTestimonials
} from '../../data/dummyData.js';
import Portfolio from "./Portfolio/Portfolio.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import Discuss from "./Discuss/Discuss.jsx";
import './Home.css';
import Spinner from "../../utils/Spinner/Spinner.jsx";

// Lazy loaded components
const Revenue = lazy(() => import("./Revenue/Revenue.jsx"));
const BlogSection = lazy(() => import("./BlogSection/BlogSection.jsx"));
const PricingSection = lazy(() => import("./PricingSection/PricingSection.jsx"));
const HomeTestimonialSection = lazy(() => import("./HTestimonial/HTestimonial.jsx"));

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <AboutSection />
      <BrowseCourses />
      <Service data={ServicesData} />
      <Portfolio data={PortfolioData} />
      <WhyChooseUs data={WhyChooseUsData} />
      <Discuss />
      <Suspense fallback={<Spinner />}>
        <HomeTestimonialSection testimonials={homeTestimonials} />
        <Revenue />
        <BlogSection />
        <PricingSection />
      </Suspense>
    </div>
  );
};

export default Home;



// import React from "react";
// import Hero from './Hero/Hero.jsx';
// import AboutSection from "./AboutSection/aboutSection.jsx";
// import BrowseCourses from "./Courses/BrowseCourses.jsx";
// import Service from "./Service/Service.jsx";
// import {
//   ServicesData, PortfolioData, WhyChooseUsData,
//   homeTestimonials
// } from '../../data/dummyData.js';
// import Portfolio from "./Portfolio/Portfolio.jsx";
// import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
// import Discuss from "./Discuss/Discuss.jsx";
// import Revenue from "./Revenue/Revenue.jsx";
// import BlogSection from "./BlogSection/BlogSection.jsx";
// import PricingSection from "./PricingSection/PricingSection.jsx";
// import HomeTestimonialSection from "./HTestimonial/HTestimonial.jsx";


// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <AboutSection />
//       <BrowseCourses/>
//       <Service data={ServicesData}/>
//       <Portfolio data={PortfolioData} />
//       <WhyChooseUs data={WhyChooseUsData} />
//       <Discuss/>
//       <HomeTestimonialSection testimonials={homeTestimonials}/>
//       <Revenue/>
//       <BlogSection/>
//       <PricingSection/>
//     </>
//   )
// }

// export default Home