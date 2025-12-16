import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from ".././config";
import "../Components/LittelComponents/Navbar.css"; // reuse dropdown card styles
import { slugify } from "../function/slugify";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        const res = await axios.get(
          `${BACKEND_URL}posts/search?query=${query}`
        );
        setResults(res.data.posts || []);
      } catch (err) {
        console.error("Search API error:", err.response?.data || err.message);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="allposts-container">
      <h2>Search Results for "{query}"</h2>

      {results.length === 0 && <p>No results found.</p>}
      <div className="search-dropdown">
        {results.map((post) => (
          <div
            key={post._id}
            className="search-card"
            onClick={() => navigate(`/post/${post._id}/${slugify(post.title)}/open`)}
          >
            <img src={post.image || "/placeholder.jpg"} alt={post.title} />
            <div className="search-card-text">
              <h4>{post.title}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 50) + "...",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
