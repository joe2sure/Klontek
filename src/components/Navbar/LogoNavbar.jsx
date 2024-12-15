import React from "react"
import logo from '../../assets/images/logo.png' 


const LogoNavbar = ({ isScrolled }) => {
  return (
    <section className={`logo-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className='container flexSB'>
        <div className='logo'>
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
        <div className='social'>
          <div className='social-icon-container'>
            <i className='fab fa-facebook-f icon'></i>
          </div>
          <div className='social-icon-container'>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='social-icon-container'>
            <i className='fab fa-twitter icon'></i>
          </div>
          <div className='social-icon-container'>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoNavbar;