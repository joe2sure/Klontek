import React from "react"
import './TextHeader.css'; 

const TextHeader = ({ subtitle, title, comingSoon = false }) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle} {comingSoon && <span className="coming-soon-tag">Coming Soon!</span>}</h3>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default TextHeader;