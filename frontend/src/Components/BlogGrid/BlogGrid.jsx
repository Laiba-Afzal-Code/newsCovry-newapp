import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCardss";
import BACKEND_URL from "../../config";
import "./Bloggrid.css";

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}posts/getlatest`);
      const data = res.data.posts || res.data;
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.length < 5) return <p>Loading posts...</p>;

  return (
    <>
    <h1 className="headd">Must Read</h1>
    <div className="blog-grid">
      {/* Left Big Card */}
      <div className="leftt">
        <BlogCard post={posts[0]} large={true} />
      </div>

      {/* Right 4 Cards */}
      <div className="right">
        {posts.slice(1, 5).map((item, index) => (
          <BlogCard key={index} post={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogGrid;
