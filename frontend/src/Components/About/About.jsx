import React from "react";
import "./About.css";
import Linkedin from "../../images/linkedin.png";
import Whatsapp from "../../images/whatsapp.png";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="about">
        <div className="aboutpic">
          <div className="box">
            <p className="linea">
              Stay informed, stay ahead – your trusted source for every
              headline.
            </p>
            <div className="icona">
              <a href="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill=" #024f80"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
                  />
                  <path
                    fill=" #024f80"
                    d="m25 34.4l-9.7-9.7l1.4-1.4l8.3 8.3l8.3-8.3l1.4 1.4z"
                  />
                  <path fill=" #024f80" d="M24 16h2v17h-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="abouttext">
          <h1 className="abouthead">
            Discover. Understand. Stay Informed — with{" "}
            <span className="aboutnewsn">Newscovry</span>
          </h1>
        </div>
        <div className="ab">
          <div className="aboicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="iconabout"
            >
              <path
                fill="#024f80"
                d="M12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m-1-7V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m0 13v-3q0-.425.288-.712T12 16t.713.288T13 17v3q0 .425-.288.713T12 21t-.712-.288T11 20m6-9h3q.425 0 .713.288T21 12t-.288.713T20 13h-3q-.425 0-.712-.288T16 12t.288-.712T17 11M4 11h3q.425 0 .713.288T8 12t-.288.713T7 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11"
              />
            </svg>
            <span className="abi">About</span>
          </div>
          <h2 className="habout">Get to Know About Us</h2>
        </div>
        <div className="maincabout">
          <div className="leftabout">
            <div className="la">
              <div className="cardabout">
                <h2 className="cla">100%</h2>
                <p className="clap">Validation of News</p>
              </div>
              <div className="cardabout">
                <h2 className="cla">100+</h2>
                <p className="clap"> Globaly Clients</p>
              </div>
              <div className="cardabout">
                <h2 className="cla">1K+</h2>
                <p className="clap">Followers</p>
              </div>
              <div className="cardabout">
                <h2 className="cla">100%</h2>
                <p className="clap">Satisfaction</p>
              </div>
            </div>
            <h2 className="habout">Social Links</h2>
            <div className="footer-socialab">
              <a
                href="https://www.linkedin.com/company/newscovry/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className="socialIcon abounic"
                />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb551MRAO7RAXQ7sKb37 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Whatsapp}
                  alt="Whatsapp"
                  className="socialIcon abounic"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574048553119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="socialIcon abounic"
                />
              </a>
              <a
                href="https://www.instagram.com/newscovry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="socialIcon abounic"
                />
              </a>
            </div>
            <div className="bb">
              <p className="count">1-</p>
              <h3 className="phana">
                Newscovry — Discover the World, One Story at a Time.
              </h3>
            </div>
            <div className="bb">
              <p className="count">2-</p>
              <h3 className="phana">
                Truth. Depth. Perspective. Welcome to Newscovry.
              </h3>
            </div>
            <div className="bb">
              <p className="count">3-</p>
              <h3 className="phana">
                Global News. Local Relevance. Powered by Newscovry.
              </h3>
            </div>
          </div>
          <div className="rightabout">
            <div className="lar">
              <h2 className="aouth">
                Smart News for Smart Readers — Only on Newscovry.
              </h2>
              <p className="count">1-</p>
              <h3 className="abp">
                "Newscovry is your trusted source for global news, delivering
                accurate and insightful stories from around the world. Whether
                it's breaking headlines or in-depth reports, we bring you closer
                to the truth — anytime, anywhere."
              </h3>
              <p className="count">2-</p>
              <p className="pana">
                "At Newscovry, we believe news should be accessible, reliable,
                and global. Our platform curates the most important stories from
                every region, empowering you with the knowledge to understand
                the world better."
              </p>
              <p className="count">3-</p>
              <p className="pana">
                "Newscovry connects you to what's happening across the globe —
                from politics and tech to culture and climate. Our mission is to
                inform, inspire, and elevate the conversation."
              </p>
              <p className="count">4-</p>
              <p className="pana">
                "Powered by journalists, enriched by data, and driven by
                curiosity — Newscovry is more than a news site. It's your lens
                to the world's most pressing stories."
              </p>
              <div className="contacta">
                <strong>Contact US:</strong>{" "}
                <p className="emailfoot">newscovry@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="privcy">
        
            <div className="pri">
              <h1 className="Privacyh">Privacy Policy – NewsCovry</h1>
              <div className="Privacyp">
                <strong>NewsCovry</strong> NewsCovry (“we”, “us”, or “our”)
                operates the website [https://www.newscovry.com] (the
                “Service”). <br /> This policy explains how we collect, use,
                disclose, and protect your personal information when you use our
                Service. By using NewsCovry, you consent to the practices
                described below.
              </div>
            </div>

            <div className="pri">
              <h1 className="Privacyh">Our Principles</h1>
              <div className="Privacyp">
                <ul>
                  <li>
                    <strong> Respect & Protection: </strong>
                    We implement appropriate physical and technological security
                    measures to safeguard your data—both in-house and via
                    service providers.{" "}
                  </li>
                  <li>
                    <strong> Transparency & Control:</strong>We only collect or
                    use your information for legitimate purposes and clearly
                    inform you what data we gather and why.
                  </li>
                  <li>
                    <strong> Marketing & Communications: </strong>You will
                    receive emails from NewsCovry or trusted partners only when
                    appropriate; you may also receive occasional reminders,
                    warnings, or policy updates.
                  </li>
                  <li>
                    We retain personal data only as needed, use it solely for
                    its original purpose, and securely dispose of it afterward.
                  </li>
                  <li>
                    <strong> Global Accessibility:</strong>
                    Since our site is accessible worldwide, data you post may be
                    viewed from anywhere.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh">Information Collection & Use</h1>
              <div className="Privacyp">
                <ul>
                  <li>
                    <strong>Personal Information:</strong>
                    We collect data you voluntarily provide, such as email for
                    newsletters or submissions.
                  </li>
                  <li>
                    <strong> Log Data:</strong>When you visit, we record your IP
                    address, browser type, pages visited, timestamps, and other
                    analytics via tools like Google Analytics.
                  </li>
                  <li>
                    <strong> Cookies: </strong> We use cookies—including
                    third-party ones like Google’s Double-Click—to personalize
                    ads and analytics.
                    <br /> You can disable cookies, though this may affect
                    functionality.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh">Service Providers</h1>
              <div className="Privacyp">
                We may share your personal data with trusted third parties
                (e.g., analytics, hosting, email services) strictly for service
                delivery. <br /> These providers are contractually obligated to
                protect your data and not use it for other purposes.
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh">Communications & Marketing</h1>
              <div className="Privacyp">
                We may send newsletters or promotional emails. You can opt out
                at any time using an unsubscribe link included in every message.
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh"> Children’s Privacy</h1>
              <div className="Privacyp">
                We do not knowingly collect information from anyone under 13.
                <br /> If we learn a minor has submitted personal data, we will
                delete it. Please contact us if this occurs.
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh"> Press Releases</h1>
              <div className="Privacyp">
                NewsCovry may publish press releases from agencies or partners.{" "}
                <br />
                We do not guarantee the accuracy or completeness of such content
                and reserve the right to modify or remove them without notice.
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh"> Policy Changes</h1>
              <div className="Privacyp">
                We may update this policy periodically. Updates will be posted
                here, and significant changes may be communicated via email or
                notifications. <br /> Please review this policy regularly.
              </div>
            </div>
            <div className="pri">
              <h1 className="Privacyh"> Contact Us</h1>
              <div className="Privacyp">
                If you have any questions or concerns about this Privacy Policy,
                you can reach us at: <br />
                <strong>Email: </strong>
                newscovry@gmail.com
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default About;
