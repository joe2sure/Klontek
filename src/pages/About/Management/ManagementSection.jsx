import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal'; // Import Fade
import { managementTeam } from '../../../data/dummyData.js';
import '../About.css';
import './ManagementSection.css';

const ManagementSection = () => {
  return (
    <section id="management" className="management">
      <div className="container">
        {/* Add Fade effect to the section header */}
        <Fade direction="up">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>
              Leveraging their vast experience within the Telecom value-added services industry, 
              Symbiotic's leadership team is dedicated to meet and exceed customer expectations 
              with innovative and cost-effective solutions, industry know-how, and unmatched services.
            </p>
          </div>
        </Fade>
        
        {managementTeam.map((member, index) => (
          // Add Fade effect to each team member card
          <Fade direction={index % 2 === 0 ? "left" : "right"} delay={200 * index} key={index}>
            <div className="management-member">
              <div className="member-image">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <span>Co-Founder & Director</span>
                {Array.isArray(member.description) 
                  ? member.description.map((para, paraIndex) => (
                      <p key={paraIndex}>{para}</p>
                    ))
                  : <p>{member.description}</p>
                }
                <div className="social-links">
                  <Link to={member.socialLinks.twitter}>
                    <i className="bi bi-twitter"></i>
                  </Link>                
                  <Link 
                    to={member.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;