import React, { useState } from "react";
import { Fade } from "react-awesome-reveal"; // Importing Fade for animation
import { team } from "../../data/dummyData.js";

const TeamCard = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMemberDetails = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <>
      {team.map((val, index) => (
        <Fade 
          direction="up" 
          cascade 
          delay={200 * index} // Adds staggered animation delay
          key={index}
        >
          <div 
            className="items shadow" 
            onClick={() => toggleMemberDetails(index)}
            style={{ position: "relative" }} // Relative position for the "See more" button
          >
            <div className="img">
              <img src={val.cover} alt={val.name} />
              <div className="overlay">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-tiktok icon"></i>
              </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.work}</p>
              {expandedMember === index && (
                <div className="additional-details">
                  <p><strong>Discipline:</strong> {val.discipline}</p>
                  <p><strong>Profession:</strong> {val.profession}</p>
                  <p><strong>Specifications:</strong> {val.specifications}</p>
                  <p><strong>Tech Stack:</strong> {val.stack}</p>
                  <p><strong>Experience:</strong> {val.experience}</p>
                  {val.email && <p><strong>Email:</strong> {val.email}</p>}
                  {val.phone && <p><strong>Phone:</strong> {val.phone}</p>}
                  <p><strong>Fun Fact:</strong> {val.funFact}</p>
                </div>
              )}
            </div>

            {/* "See more" button */}
            <div
              className="see-more-button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMemberDetails(index);
              }}
            >
              {expandedMember === index ? "See less" : "See more"}
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
};

export default TeamCard;