import React from "react"
// import { blog } from "../../../dummydata"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Klontek</h1>
            <span>think it, tech it...</span>
            <p>Expand your knowledge with our best education, designed to inspire and empower you on your learning journey</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
        
             
          <div className='box link'>
            <h3>Address</h3>
            <ul>
              <li>Remote</li>
              <li>Kalemie 240 street</li>
              <li>Terms & Conditions</li>
              <li>Tanganyika Province</li>
              <li>Kalemie city</li>
            </ul>
          </div>

          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                institut. Technique, International,lepieux, DRC
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +250783012138
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                lepieuxinternationalschool.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This site is made with <i className='fa fa-heart'></i> by BaudoinCoder
        </p>
      </div>
    </>
  )
}

export default Footer