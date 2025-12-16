// components/Footer.js
import React from "react";
import "./Footone.css";
import Logo from "../../images/logo1.png";
import Linkedin from "../../images/linkedin.png";
import Whatsapp from "../../images/whatsapp.png";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import * as motion from "motion/react-client";
const Footer = ()=> {
  return (
    <footer className="footer">
      
      <a href="/" className="footlogo">
        <img src={Logo} alt="newscovry" width={80} />
        <h2 className="footname">NewsCovry</h2>
      </a>
      <p className="footpara">
        NewsCovry brings you the latest updates from Pakistan's startup
        ecosystem, helping you stay informed and ahead of the curve. In the
        world of business, staying updated on your competitors' moves is key to
        growth. NewsCovry delivers news across multiple categories — Business,
        Tech, Global Tech, Auto, and Startups — sourced directly from industries
        around the globe. This platform equips you with insights to identify
        emerging opportunities not only in Pakistan but also worldwide.
      </p>

      <div className="socialicons">
        <div className="contact">
          <strong>Contact US:</strong>{" "}
          <p className="emailfoot">newscovry@gmail.com</p>
        </div>
        <div className="footer-social">
          <motion.a
            href="https://www.linkedin.com/company/newscovry/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Linkedin} alt="Linkedin" className="socialIcon" />
          </motion.a>

          <motion.a
            href="https://whatsapp.com/channel/0029Vb551MRAO7RAXQ7sKb37 "
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Whatsapp} alt="Whatsapp" className="socialIcon" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61574048553119"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Facebook} alt="Facebook" className="socialIcon" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://www.instagram.com/newscovry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="socialIcon" />
          </motion.a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footcopy"> &copy; 2025 NewsCovry. All rights reserved.</p>
        {/* <div className="footline"></div> */}
        <div className="links">
          <a href="/about/privacy">
            <p className="fnav"> About Us </p>
          </a>
          <a href="/about/privacy">
            <p className="fnav"> Privacy Policy</p>
          </a>
          <a href="/contact">
            <p className="fnav">Contact Us</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
