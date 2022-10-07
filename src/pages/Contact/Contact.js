import React from "react"
import "./contact.css"
import CImage from "../../Components/Assets/Images/cont.svg"
const Contact = () => {
  const styles = {
    backgroundColor: "dark" ? "white" : "black",
  }

  return (
    <div className="defaultholder">
      <div className="cHolder container">
        <div className="cImage">
          <img src={CImage} alt="" />
        </div>
        <div className="cForm">
          <form>
            <input className="inputer" type="text" placeholder="Full Name" />
            <br />
            <input
              className={`inputer ${styles} `}
              type="email"
              placeholder="Email"
            />
            <br />
            <textarea
              className="inputer"
              cols="50"
              rows="5"
              placeholder="Please leave your message..."
            ></textarea>
            <br />
            <button className="primary-btn">Contact Me</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
