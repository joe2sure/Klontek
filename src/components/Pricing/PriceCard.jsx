import React from "react";
import { Fade } from 'react-awesome-reveal';
import { priceData } from "../../data/dummyData.js";

const PriceCard = () => {
  return (
    <>
      {priceData.map((val, index) => (
        <Fade direction="up" delay={500 * index} key={index}>
          <div className='items shadow'>
            <h4>{val.name}</h4>
            <h1>
              <span>₦</span>
              {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className='outline-btn'>GET STARTED</button>
          </div>
        </Fade>
      ))}
    </>
  )
}

export default PriceCard;