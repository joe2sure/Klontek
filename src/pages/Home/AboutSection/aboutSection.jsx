import React from "react"
import { Fade } from 'react-awesome-reveal'
import TextHeader from "../../../components/TextHeader/TextHeader.jsx"
import "./aboutSection.css"
import { homeAbout } from "../../../data/dummyData.js"
import AboutWrapper from "./aboutWrapper.jsx"
import AboutImg from '../../../assets/images/about.webp'

const AboutSection = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
            <div className='left row'>
              <img src={AboutImg} alt='' />
            </div>
       
          
          <div className='right row'>
            <Fade direction="right" triggerOnce>
              <TextHeader 
                subtitle='EMPOWERING TECHNOLOGY' 
                title='Revolutionizing Tech Education and Innovation in Africa' 
              />
            </Fade>
            
            <div className='items'>
              {homeAbout.map((val, index) => (
                <Fade 
                  key={index} 
                  direction={index % 2 === 0 ? "left" : "right"} 
                  delay={500 * index} 
                  triggerOnce
                >
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
    </>
  )
}

export default AboutSection