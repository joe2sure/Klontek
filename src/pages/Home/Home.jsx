import React from "react";
import Hero from './Hero/Hero.jsx';
import AboutSection from "./AboutSection/aboutSection.jsx";
import BrowseCourses from "./Courses/BrowseCourses.jsx";
import Service from "./Service/Service.jsx";
import {
  ServicesData, PortfolioData
} from '../../data/dummyData.js';
import Portfolio from "./Portfolio/Portfolio.jsx";
// import WhatWeDo from "./Service/WhatWeDo.jsx";
// import AboutCard from "../about/AboutCard";
// import Hblog from "./Hblog";
// import HAbout from "./HAbout";
// import Hprice from "./Hprice";
// import Testimonal from "./testimonal/Testimonal";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BrowseCourses/>
      <Service data={ServicesData}/>
      <Portfolio data={PortfolioData} />
      {/* <WhatWeDo/> */}
      {/* <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice /> */}
    </>
  )
}

export default Home