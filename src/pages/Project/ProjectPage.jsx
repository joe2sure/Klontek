// ProjectPage.jsx
import React from "react"; 
import "./ProjectPage.css"; 
 
import { Portfolios } from '../../data/dummyData'; 
import HeroPortfolio from "./HeroPortfolio/HeroPortfolio"; 
import AllPortfolio from "./AllPortfolio/AllPortfolio"; 
import Discuss from "./Discuss/Discuss"; 
import Back from "../../components/Back"; 
 
const ProjectPage = () => { 
  return ( 
    <> 
      <Back title='Projects' /> 
      <main id="main"> 
        <section className="project-page-header"> 
          <div className="project-page-container"> 
            <div className="project-page-text">
              <p>We are AFRICA'S GIANT LEADER in Integrated Technological AI Solutions and services,</p> 
              <p>We offer Services across Educational Content,</p> 
              <p>Entertainment Content, Games, sports and many more</p>
            </div> 
          </div> 
        </section> 
        <HeroPortfolio /> 
        <AllPortfolio data={Portfolios} /> 
        <Discuss /> 
      </main> 
    </> 
  ) 
} 
 
export default ProjectPage;