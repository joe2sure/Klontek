import React, { useState } from "react"
import { Link } from "react-router-dom";

import LogoNavbar from "./LogoNavbar.jsx"
import "./Header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <LogoNavbar />
      <header>
        <nav className="flexSB ">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/team">Teams</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;