import React from "react"
import PriceCard from "../../components/Pricing/PriceCard"
import Faq from "../../components/Pricing/Faq"
import Back from "../../components/Back.js";


const Pricing = () => {
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

export default Pricing
