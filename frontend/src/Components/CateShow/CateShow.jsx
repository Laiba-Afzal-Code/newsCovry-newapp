import React, { useEffect, useState } from "react";
import "./Cateshow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";

const CateShow = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}posts/getallpost`);
        const posts = Array.isArray(res.data.posts) ? res.data.posts : res.data;

        const uniqueCats = [...new Set(posts.map((p) => p.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error(err);
        toast.error("Unable to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Navigate to category page
  const handleCategoryClick = (cat) => {
    navigate(`/category/${cat}`);
  };

  return (
    <div className="category-container">
      <h2 className="category-title">Explore Categories</h2>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat} className="category-card">
              <div className="category-content">
                <h3>{cat}</h3>

                <button
                  className="category-btn"
                 onClick={() => handleCategoryClick(cat)}
                >
                  View Category
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CateShow;
