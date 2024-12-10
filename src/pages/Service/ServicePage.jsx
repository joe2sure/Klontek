import React from "react";
import "./ServicePage.css";
import Back from "../../components/Back.jsx";
import EducationalContent from "./EducationalContent.jsx";
import EntertainmentContent from "./EntertainmentContent.jsx";
import GamesContent from "./GamesContent.jsx";
import SportsContent from "./SportsContent.jsx";

const ServicePage = () => {
  return (
    <>
      <Back title='Service' />
      <main id="main">
        <section className="service-header">
          <div className="service-page-container">
            <p>We are a GLOBAL LEADER in Telcom VAS, offer Services across Educational Content, Entertainment Content, Games and sports</p>
          </div>
        </section>
        <EducationalContent />
        <EntertainmentContent />
        <GamesContent />
        <SportsContent />
      </main>
    </>
  )
}

export default ServicePage;