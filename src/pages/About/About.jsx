import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import AboutSection from "../Home/AboutSection/aboutSection"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutSection />
    </>
  )
}

export default About