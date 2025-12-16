import React, { useState } from "react";
import "./contact.css";
import Logo from "../../images/logo1.png"; // Assuming you have a logo image
import Manc from "../../images/manc.png"; // Assuming you have a logo image
import axios from "axios";
import CateShow from "../CateShow/CateShow";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  

    try {
      // Replace with your backend endpoint
      const res = await axios("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", subject:"" });
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="contactpage">
        <div className="mainc">
          <div className="topc">
            <h1 className="topchead">Get in Tuch with Us</h1>
            <p className="topcp">
              We would love to hear from you! Whether you have a question,
              feedback, or just want to say hello, feel free to reach out to us.
            </p>
          </div>
          <div className="cmid">
            <div className="left">
              <div className="cblock">
                <h2 className="cblockhead">
                  Have Questions? We're Just a Message Away!
                </h2>
                <p className="cblockphead">
                  Fill out the form below, And one of our team members will get
                  back to you shortly.
                </p>
                <form className="cinbox" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="labelc">
                      Name:
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="labelc">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="newscovry@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="labelc">
                      Subject:
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Choose your Subject"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="labelc">
                      Message:
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Leave us a Message"
                    />
                  </div>
                </form>
                <button type="submit" disabled={loading} className="ctbn">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
            <div className="right">
              <div className="block">
                <div className="logoc">
                  <img src={Logo} alt="Newscovry" width={40} />{" "}
                  <h1 className="logotc">NewsCovry</h1>
                </div>
                <img src={Manc} alt="" className="manc" />
                <h2 className="h2c">Our experts will always help you</h2>
              </div>
              <div className="contactblock">
                <div className="cardc">
                  <div className="cimg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="rgb(3, 80, 135)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                      >
                        <path d="M44 24V9H24H4V24V39H24" />
                        <path
                          fill="#2f88ff"
                          d="M35 39L43 32L39 28L31 35V39H35Z"
                        />
                        <path d="M4 9L24 24L44 9" />
                      </g>
                    </svg>
                  </div>
                  <div className="ctext">
                    <h3 className="ctexthead">Email Us</h3>
                    <p className="ctextp">newscovry@gmail.com</p>
                  </div>
                </div>
                <div className="cardc">
                  <div className="cimg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="rgb(3, 80, 135)"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                        d="M12.735 20.191a15 15 0 0 1-.92-.447a19 19 0 0 1-4.1-3.12A18 18 0 0 1 3.88 11.42a11.3 11.3 0 0 1-1.022-3.325a5.93 5.93 0 0 1 .37-3.465c.289-.47.637-.9 1.035-1.279a1.8 1.8 0 0 1 1.278-.601c.505.076.962.34 1.278.742c.69.767 1.43 1.457 2.159 2.186c.287.246.466.595.498.972c-.012.317-.134.62-.345.857c-.242.307-.536.588-.817.882a1.54 1.54 0 0 0-.46 1.279a3.7 3.7 0 0 0 .881 1.457c.486.665.971 1.28 1.52 1.931a13.6 13.6 0 0 0 3.463 2.865a1.28 1.28 0 0 0 1.278.153a4 4 0 0 0 1.137-.946c.275-.335.669-.55 1.099-.601c.383.02.744.184 1.01.46c.344.294.638.64.958.959c.319.32.575.55.843.844q.482.425.907.908c.22.284.324.64.294.997a2.1 2.1 0 0 1-.703 1.087a4.78 4.78 0 0 1-3.756 1.458a10.7 10.7 0 0 1-4.05-1.049Z"
                      />
                    </svg>
                  </div>
                  <div className="ctext">
                    <h3 className="ctexthead">Call</h3>
                    <p className="ctextp">+92 307 6735826</p>
                  </div>
                </div>
                <div className="cardc">
                  <div className="cimg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="rgb(3, 80, 135)"
                        fill-rule="evenodd"
                        d="M11.95 2.5h.1c.9 0 1.65 0 2.24.08c.63.08 1.19.27 1.65.73c.46.45.64 1.02.73 1.65c.06.43.07.95.08 1.55c.61.01 1.14.03 1.61.08c.89.09 1.63.28 2.28.71c.52.35.96.79 1.31 1.31c.43.65.62 1.39.71 2.28c.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32c-.09.89-.28 1.63-.71 2.28c-.35.52-.79.96-1.31 1.31c-.65.43-1.39.62-2.28.71c-.87.09-1.95.09-3.32.09H8.96c-1.37 0-2.45 0-3.32-.09c-.89-.09-1.63-.28-2.28-.71c-.52-.35-.96-.79-1.31-1.31c-.43-.65-.62-1.39-.71-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32c.09-.89.28-1.63.71-2.28c.35-.52.79-.96 1.31-1.31c.65-.43 1.39-.62 2.28-.71c.47-.05 1-.07 1.61-.08c0-.6.02-1.12.08-1.55c.08-.63.27-1.2.73-1.65c.46-.46 1.02-.65 1.65-.73c.59-.08 1.34-.08 2.24-.08m3.23 2.66c.05.34.06.77.06 1.34h-6.5c0-.57.02-1 .06-1.34c.06-.47.17-.66.3-.79s.33-.24.79-.3C10.37 4 11.02 4 11.98 4s1.61 0 2.09.07c.46.06.66.17.79.3s.24.32.3.79zM5.79 8.08c-.77.08-1.23.23-1.6.47c-.35.23-.66.54-.9.89c-.24.37-.39.83-.47 1.6c-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6c.24.35.54.66.9.89c.36.24.83.39 1.6.47c.78.08 1.79.08 3.21.08h6c1.42 0 2.43 0 3.21-.08c.77-.08 1.23-.23 1.6-.47c.35-.23.66-.54.9-.89c.24-.37.39-.83.47-1.6c.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21c-.08-.77-.23-1.23-.47-1.6c-.24-.35-.54-.66-.9-.89c-.36-.24-.83-.39-1.6-.47C17.43 8 16.42 8 15 8H9c-1.42 0-2.43 0-3.21.08m.43 2.45a.75.75 0 0 0-.94.5c-.12.39.1.81.49.94l.65.2c1.55.48 3.18.75 4.82.82v1.26c0 .41.34.75.75.75s.75-.34.75-.75v-1.26c1.64-.07 3.27-.34 4.82-.82l.65-.2c.4-.13.62-.55.49-.94a.75.75 0 0 0-.94-.5l-.65.21a17.7 17.7 0 0 1-10.25 0l-.65-.21z"
                        color="rgb(3, 80, 135)"
                      />
                    </svg>
                  </div>
                  <div className="ctext">
                    <h3 className="ctexthead">Working Hours</h3>
                    <p className="ctextp">Mon-Fri, 24 hours (PTS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <CateShow/>
      </div>
    </>
  );
};

export default Contact;
