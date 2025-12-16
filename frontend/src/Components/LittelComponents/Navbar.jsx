import "./Navbar.css";
import Logo from "../../images/newscovry.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  // Fetch categories once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}posts/getallpost`);
        const posts = res.data.posts || res.data;
        const uniqueCats = [...new Set(posts.map((p) => p.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error(err);
        toast.error("Unable to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const slug = e.target.value;
    setSelectedCategory(slug);
    if (slug) navigate(`/category/${slug}`);
  };

  return (
    <nav className="navbar">
      {/* Logo + Search */}
      <div className="logoandsearch">
        <div className="logo">
          <Link to="/" className="logoa">
            <img src={Logo} alt="NewsCovry" style={{ width: 70 }} />
          </Link>
        </div>

        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Center links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <NavLink to="/" className="navcategory">
              Home
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <NavLink to="/about/privacy" className="navcategory">
              About us
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <NavLink to="/allblogposts" className="navcategory">
              Blogs
            </NavLink>
          </motion.li>

          {/* Categories dropdown */}
          <li>
            <select
              value={selectedCategory}
              onChange={handleChange}
              className="dropdown"
            >
              <option value="" className="navcategory">
                Categories
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="dropdownp">
                  {cat}
                </option>
              ))}
            </select>
          </li>
       
        </ul>
      </div>
      {/* CTA button */}
      <div className="navbtn">
      {/* Global search bar */}
        <NavbarSearch />
        <Link to="/contact">
          <motion.button whileTap={{ scale: 0.95 }} className="navBtnC">
            Contact Us
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
