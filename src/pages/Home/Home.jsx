import React from "react";
import Hero from './Hero/Hero.jsx';
import AboutSection from "./AboutSection/aboutSection.jsx";
import BrowseCourses from "./Courses/BrowseCourses.jsx";
import Service from "./Service/Service.jsx";
import {
  ServicesData, PortfolioData, WhyChooseUsData
} from '../../data/dummyData.js';
import Portfolio from "./Portfolio/Portfolio.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import Discuss from "./Discuss/Discuss.jsx";
import Revenue from "./Revenue/Revenue.jsx";
import BlogSection from "./BlogSection/BlogSection.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";
import PricingSection from "./PricingSection/PricingSection.jsx";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BrowseCourses/>
      <Service data={ServicesData}/>
      <Portfolio data={PortfolioData} />
      <WhyChooseUs data={WhyChooseUsData} />
      <Discuss/>
      <Testimonial/>
      <Revenue/>
      <BlogSection/>
      <PricingSection/>
    </>
  )
}

export default Home