import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                <div>
                  <p>Leeds, UK</p>
                </div>
              </div>
              <div className="phone">
                <h4>
                  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                  Available on request.
                </h4>
              </div>
              <div className="email">
                <h4>
                  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                  lewisloynes@gmail.com
                </h4>
              </div>
            </div>
            <div className="right">
              <h4>About Me:</h4>
              <p>Hi, my name is Lewis Loynes and I'm a self-taught aspiring software developer.</p>
              <div className="social">
                <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Footer
