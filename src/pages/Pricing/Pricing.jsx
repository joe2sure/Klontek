import React from "react";
import PriceCard from "../../components/Pricing/PriceCard";
import Back from "../../components/Back";
import Faq from "../../components/Pricing/Faq";
import '../../components/Pricing/Pricing.css';


const PricingPage = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default PricingPage
