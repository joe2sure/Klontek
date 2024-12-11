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
      <Back title='Service' />
      <main id="main">
        <section className="project-page-header">
          <div className="project-page-container">
            <p>We are a GLOBAL LEADER in Telcom VAS, offer Services across Educational Content, Entertainment Content, Games and sports</p>
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