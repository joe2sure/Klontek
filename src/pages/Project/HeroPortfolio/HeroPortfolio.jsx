import React from 'react'; 
import { Fade } from 'react-awesome-reveal'; 
import heroPortfolio from '../../../assets/images/hero/portfolioHero.png'; 
import './HeroPortfolio.css';

export default function HeroPortfolio() { 
  return ( 
    <section className="hero-portfolio"> 
      <div className="hero-text"> 
        <Fade direction="up" triggerOnce> 
          <h1>Portfolio</h1> 
        </Fade> 
        <Fade direction="up" triggerOnce delay={400}> 
          <p> 
            As a Software House that designs and develops websites, mobile apps, and UI/UX design, we have been trusted by our clients from all around the world. 
          </p> 
        </Fade> 
      </div> 
      <div className="hero-image"> 
        <Fade direction="up" triggerOnce> 
          <img src={heroPortfolio} alt="Hero" /> 
        </Fade> 
      </div> 
    </section> 
  ); 
}