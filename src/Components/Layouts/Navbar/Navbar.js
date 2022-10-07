import React from "react"
import { useEffect, useState } from "react"
import "./navbar.css"
import { Outlet, Link } from "react-router-dom"
import { RiMoonClearFill, RiSunFill } from "react-icons/ri"
import { FaHome } from "react-icons/fa"
import { CgOrganisation } from "react-icons/cg"
import { MdWork, MdMail } from "react-icons/md"
import { GiOpenBook } from "react-icons/gi"

const Navbar = () => {
  // Toggler
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme
  }, [theme])
  // Toggler

  return (
    <div className={`navbar${theme}`}>
      <div className={`nav ${theme} `}>
        <h3>
          <Link className={`links ${theme} `} to="/">
            Shivkumar M
          </Link>
        </h3>
        <nav className="innerNav">
          <ul className={`nav-link ${theme} `}>
            <li>
              <Link className={`links ${theme} `} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`links ${theme} `} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={`links ${theme} `} to="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className={`links ${theme} `} to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className={`links ${theme} `} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <span className="changer" onClick={toggleTheme}>
            {theme === "dark" ? (
              <RiSunFill size={30} />
            ) : (
              <RiMoonClearFill size={30} />
            )}
          </span>
        </nav>
      </div>
      {/* ====== FOR Mobile DEVICES ======== */}
      <ul className={` nav-md-link ${theme} `}>
        <li>
          <Link className={`links ${theme}`} to="/">
            <FaHome size={20} />
            <h6 className="bNavheading">Home</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/projects">
            <MdWork size={20} />
            <h6 className="bNavheading">Projects</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/experience">
            <CgOrganisation size={20} />
            <h6 className="bNavheading">Experience</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/skills">
            <GiOpenBook size={20} />
            <h6 className="bNavheading">Skills</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/contact">
            <MdMail size={20} />
            <h6 className="bNavheading">Contact</h6>
          </Link>
        </li>
      </ul>
      {/* ====== FOR Mobile DEVICES ======== */}

      <Outlet />
    </div>
  )
}

export default Navbar
