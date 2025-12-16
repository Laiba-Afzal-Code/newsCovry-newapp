import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../config";
import "./Navbar.css";

const NavbarSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Fetch results as user types (live search)
  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      try {
        const res = await axios.get(
          `${BACKEND_URL}posts/search?query=${query}`
        );
        setResults(res.data.posts || []);
      } catch (err) {
        console.error("Search API error:", err.response?.data || err.message);
      }
    };

    const debounce = setTimeout(fetchData, 300); // debounce 300ms
    return () => clearTimeout(debounce);
  }, [query]);

  // Input change
  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value.trim() !== "");
  };

  // Clear search input + dropdown
  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  };

  // Submit (Enter key)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
    setShowDropdown(false);
  };

  return (
    <div className="nav-search" style={{ position: "relative" }}>
      <form onSubmit={handleSubmit} className="inputer">
        <input
          type="text"
          placeholder="Search newscovry"
          value={query}
          onChange={handleChange}
        />

        {/* CLEAR BUTTON (×) */}
        {query && (
          <button
            type="button"
            className="clear-btn"
            onClick={clearSearch}
          >
            ×
          </button>
        )}

        {/* Search icon button */}
        <button type="submit" className="search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="white"
                fillOpacity="0.16"
                d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
              />
              <path
                stroke="gray"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
              />
            </g>
          </svg>
        </button>
      </form>

      {/* RESULTS DROPDOWN */}
      {showDropdown && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((post) => (
            <div
              key={post._id}
              className="search-card"
              onClick={() => {
                navigate(`/post/${post._id}/open`);
                setShowDropdown(false);
              }}
            >
              <img src={post.image || "/placeholder.jpg"} alt={post.title} />
              <div className="search-card-text">
                <h4>{post.title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.content.slice(0, 50)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
