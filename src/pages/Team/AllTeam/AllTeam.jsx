import React from 'react';
import Fade from 'react-awesome-reveal';
import './AllTeam.css'; 

export default function AllTeam({ data }) {
  return (
    <section className="all-team-container">
      <div className="all-team-grid">
        {data.map((item, index) => (
          <Fade bottom triggerOnce delay={200 * index} key={index}>
            <div className="team-member-card">
              <div className="team-member-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt="Team Member"
                  className="team-member-image"
                />
              </div>
              <h2 className="team-member-name">{item.name}</h2>
              <p className="team-member-position">{item.position}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}