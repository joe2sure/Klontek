import React from "react";
import { Fade } from "react-awesome-reveal"; // Import Fade
import about_img from '../../../assets/images/about-image.png';
import { companyIntro } from '../../../data/dummyData.js';
import '../About.css';
import './BioSection.css';

const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="container">
        {/* Add Fade effect to the section header */}
        <Fade direction="up">
          <div className="section-header">
            <h2>{companyIntro.title}</h2>
            <div className="underline"></div>
          </div>
        </Fade>
        
        <div className="bio-content">
          {/* Add Fade effect to the image */}
          <Fade direction="left">
            <div className="bio-image">
              <img 
                src={about_img} 
                alt="Helping Clients achieve their Vision" 
                title="Helping Clients achieve their Vision" 
              />
            </div>
          </Fade>

          {/* Add Fade effect to the text */}
          <Fade direction="right">
            <div className="bio-text">
              {companyIntro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default BioSection;