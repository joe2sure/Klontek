import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <section className='newsletter'>
        <div className='container'>
          <div className='newsletter-content'>
            <div className='newsletter-text'>
              <h2>Newsletter - Stay tune and get the latest update</h2>
              <p>Far far away, behind the word mountains</p>
            </div>
            <div className='newsletter-form'>
              <input type='email' placeholder='Enter email address' />
              <button type="submit" aria-label="Subscribe">
                <i className='fa fa-paper-plane'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='footer-content'>
            <div className='footer-section'>
              <h2>Klontek</h2>
              <p className="slogan">think it, tech it...</p>
              <p>Expand your knowledge with our best education, designed to inspire and empower you on your learning journey</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className='fab fa-facebook-f icon'></i></a>
                <a href="#" aria-label="Twitter"><i className='fab fa-twitter icon'></i></a>
                <a href="#" aria-label="Instagram"><i className='fab fa-instagram icon'></i></a>
              </div>
            </div>
            <div className='footer-section'>
              <h3>Explore</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className='footer-section'>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Feedbacks</a></li>
              </ul>
            </div>
            <div className='footer-section'>
              <h3>Address</h3>
              <ul>
                <li>Remote</li>
                <li>Enugu</li>
                <li>Abuja</li>
                <li>Lagos</li>
              </ul>
            </div>
            <div className='footer-section'>
              <h3>Have a Questions?</h3>
              <ul>
                <li>
                  <i className='fa fa-map'></i>
                  <span>Klontek AI academy Coming soon!!</span>
                </li>
                <li>
                  <i className='fa fa-phone-alt'></i>
                  <span>+2437017006937</span>
                </li>
                <li>
                  <i className='fa fa-paper-plane'></i>
                  <span>Joe2sure1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This site is made with <i className='fa fa-heart'></i> by Klontek
        </p>
      </div>
    </>
  )
}

export default Footer