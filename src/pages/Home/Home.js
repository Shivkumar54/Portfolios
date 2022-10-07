import React from "react"
import HeroImage from "../../Components/Assets/Images/userr.svg"
import "./home.css"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Resume from "../../Components/Assets/Resume/Resume.pdf"
import About from "../About/About"
const Home = () => {
  const [text] = useTypewriter({
    words: ["Front end Developer", "Web designer"],
    loop: 0,
  })

  return (
    <div className=" defaultholder">
      <div className="flexer container">
        <div className="image">
          <img src={HeroImage} alt="HeroImage" className="hImage" />
        </div>
        <div className="text">
          <h1 className="heroTitle">
            Hello I'm <span className="bolder">Shivkumar M</span>
          </h1>
          <h2 className="typewriterText">
            {text} <Cursor />{" "}
          </h2>
          <p className="heroPara">
            Specialized in ReactJS, JavaScript HTML, CSS,Adobe-XD & Figma.
          </p>
          <div className="buttons">
            <a href={Resume} download="Resume">
              <button className="primary-btn" type="submit">
                Download CV
              </button>
            </a>
            <a href="/contact">
              <button className="secondary-btn" type="submit">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home
