import React from "react";
import { Fade } from 'react-awesome-reveal';
import PriceCard from "../../components/Pricing/PriceCard";
import Back from "../../components/Back";
import Faq from "../../components/Pricing/Faq";
import '../../components/Pricing/Pricing.css';

const PricingPage = () => {
  return (
    <>
        <Back title='Choose Your Plan' />

      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Fade direction="left">
        <Faq />
      </Fade>
    </>
  )
}

export default PricingPage;