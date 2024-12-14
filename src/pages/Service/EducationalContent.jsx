import React from "react";
import education from "../../assets/images/service/education-bg.png";
import { Fade } from "react-awesome-reveal";

const EducationalContent = () => {
  return (
    <Fade direction="up" delay={300}>
      <section id="Educational-content" className="services-section">
        <div className="service-page-container">
          <div className="service-page-row">
            <div className="service-page-col-img">
              <img src={education} alt="Educational Content" className="service-page-img-fluid" />
            </div>
            <div className="service-page-col-content">
              <div className="service-page-icon">
                <i className="bi bi-book"></i>
              </div>
              <h4>Educational Content</h4>
              <p>
                Education is the key to unlocking the golden door of freedom. Educational content are crucial as it is an 
                investment in human capital that yields tremendous benefits to personal, social and economic 
                development.
              </p>
              <p>
                Our Educational Content spans Software Engineering, Machine Learning, Artificial Intelligence across all disciplines,
                Backend Engineering(Nodejs/C#), Mobile Development (React Native/Flutter), Web Development... etc.
              </p>
              <p>
                we have Animated tutorials, offers practice exercises, Assessments, LIVE Tutor
              </p>
              <p>
                Other Skill Development covers 
                Graphic Design, Data Science/Data Analysis, Cinematography, Mobile/PC Repairs and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default EducationalContent;