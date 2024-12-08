import React from "react";
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
import Revenue from "./Revenue/Revenue.jsx";
import BlogSection from "./BlogSection/BlogSection.jsx";
import PricingSection from "./PricingSection/PricingSection.jsx";
import HomeTestimonialSection from "./HTestimonial/HTestimonial.jsx";


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
      <HomeTestimonialSection testimonials={homeTestimonials}/>
      <Revenue/>
      <BlogSection/>
      <PricingSection/>
    </>
  )
}

export default Home