import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

import LogoNavbar from "./LogoNavbar.jsx"
import "./Header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <LogoNavbar isScrolled={isScrolled} />
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "nav-menu flexSB"}
            onClick={() => setClick(false)}
          >
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
            <li><Link to="/team" className={location.pathname === "/team" ? "active" : ""}>Team</Link></li>
            <li><Link to="/service" className={location.pathname === "/service" ? "active" : ""}>Service</Link></li>
            <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
            <li><Link to="/career" className={location.pathname === "/career" ? "active" : ""}>Career</Link></li>
            <li><Link to="/event" className={location.pathname === "/event" ? "active" : ""}>Event</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            {/* <li><Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>Pricing</Link></li> */}
            <li><Link to="/journal" className={location.pathname === "/journal" ? "active" : ""}>Journal</Link></li>
          </ul>
          <div className="start">
            <div className="button">Join the AI Academy</div>
          </div>
          <button className={`toggle ${click ? 'active' : ''}`} onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header;