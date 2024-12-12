import React from "react";
import "./About.css";
import AboutSection from "../Home/AboutSection/aboutSection";
import Back from "../../components/Back.jsx"
import BioSection from "./Bio/BioSection.jsx";
import VisionSection from "./Vision/VisionSection.jsx";
import ManagementSection from "./Management/ManagementSection.jsx";


const About = () => {
  return (
    <>
      <Back title='About' />
      <main id="main">   
        <BioSection />
        <VisionSection />
        <ManagementSection />
        <AboutSection />
      </main>

    </>
  )
}

export default About