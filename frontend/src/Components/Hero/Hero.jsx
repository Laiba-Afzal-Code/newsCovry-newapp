// components/Hero.js

import "./Hero.css";
import Linkedin from "../../images/linkedin.png";
import Whatsapp from "../../images/whatsapp.png";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import { ReactTyped } from "react-typed";

import * as motion from "motion/react-client";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="felx">
          <div className="hero-content">
            <h1 className="herohead">
              <ReactTyped
                className="head"
                strings={[
                  "Stories, insights, and ideas",
                  "Your daily dose of NewsCovry",
                  "Stay ahead of the curve",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <div className="p-contnt">
              <h3 className="head">Welcome to NewsCovry</h3>
              <p className="herop">
                Covering real stories from around the globe. <br /> Fast,
                reliable, and made for modern readers. <br /> Your trusted
                source for breaking news, trends, and insights.
              </p>
              <p className="herop">
                Bringing you real-time news, insights, and stories from around
                the world—fast
              </p>
            </div>
          </div>
        </div>
        <div className="hero-image">
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
          <div className="line"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
