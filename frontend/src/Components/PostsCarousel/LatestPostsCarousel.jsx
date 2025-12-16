import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config.js";
import "./LatestPostsCarousel.css";
import { Link } from "react-router-dom";
import { slugify } from "../../function/slugify.js";
const LatestPostsCarousel = ({ interval = 4000 }) => {
  // <== Auto-slide every X ms
  const [posts, setPosts] = useState([]);
  const [current, setCurrent] = useState(0);

  const fetchLatestPosts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}posts/getlatest`);
      setPosts(res.data || []);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  // Auto Slide
  useEffect(() => {
    if (posts.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [posts, interval]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="carousel-container">
      {posts.length > 0 ? (
        <>
          <div className="carousel">
            {posts.map((post, index) => (
              <div
                key={post._id || index}
                className={`slide ${index === current ? "active" : ""}`}
               
              >
                <img
                  src={post.image || "https://via.placeholder.com/1200x600"}
                  alt={post.title}
                />

                <Link
                to={`/post/${post._id}/${slugify(post.title)}/open`} className="caption a">
                  <h2 className="chead">{post.category}</h2>
                  <h3 className="cmid">{post.title.slice(0, 100)}...</h3>
                  <div
                    className="p"
                    dangerouslySetInnerHTML={{
                      __html: post.content.slice(0, 50),
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          {/* <div className="dots">
            {posts.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active-dot" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div> */}
        </>
      ) : (
        <p className="loading">Loading latest posts...</p>
      )}
    </div>
  );
};

export default LatestPostsCarousel;
