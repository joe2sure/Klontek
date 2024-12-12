import React from 'react';
import { Fade } from "react-awesome-reveal"; // Import Fade
import './VisionSection.css';

const VisionSection = () => {
  return (
    <div id="vision" className="vision">
      <div className="container">
        <div className="vision-grid">
          {/* Add Fade effect to each vision card */}
          <Fade direction="up">
            <div className="vision-card">
              <h2 className="card-title">Vision</h2>
              <p>
                To become the world's leading AI innovative company from Africa for value-added services and solutions
                and create an outstanding value for customers and stakeholders.
              </p>
            </div>
          </Fade>
          
          <Fade direction="up" delay={200}>
            <div className="vision-card">
              <h2 className="card-title">Mission</h2>
              <p>
                To anticipate the needs of AI induced solutions for consumers and deliver outstanding 
                products that are value for money.
              </p>
            </div>
          </Fade>
          
          <Fade direction="up" delay={400}>
            <div className="vision-card">
              <h2 className="card-title">Our Values</h2>
              <p>
                Our business is driven by our consumer focus, creativity, 
                resourcefulness, and entrepreneurial spirit. We are an inspired 
                diverse team, and we respect and value everyone's contribution.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
