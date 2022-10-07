import React from "react"
import "./about.css"
import AboutImage from "../../Components/Assets/Images/about.svg"
const About = () => {
  return (
    <div className="about">
      <div className="aContentHolder container ">
        <div className="aImage">
          <img src={AboutImage} alt="ABoutImage" className="aboutImg" />
        </div>
        <div className="atext">
          <h2 className="aTitle">
            Let Me <br /> Introduce Myself
          </h2>
          <p className="aPara">
            I'm Shivkumar M 22 years old completed BE in Computer Science
            engineering stream in the year 2021. I'm a React JS developer with
            7+ months of experience, and 2+ years of experience in HTML and CSS.
            Web designer specializing in Adobe XD and Figma Tools.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
