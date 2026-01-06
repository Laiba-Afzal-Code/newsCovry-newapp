import React from "react";
import "./Bloggrid.css";
import { Link } from "react-router-dom";
import { slugify } from "../../function/slugify";

const BlogCardss = ({ post, large }) => {
  return (
    <div className={large ? "blog-card large" : "blog-card"}>
      <Link to={`/post/${post._id}/${slugify(post.title)}/open`}>
      <img src={post.image} alt={post.title} className="blog-image" />

      <div className="blog-overlay">
        <span className="blog-category">{post.category}</span>

        <h2 className="blog-title">{post.title}</h2>

        <div className="blog-meta">
          <span>{post.author || "Admin"}</span>
          <span>•</span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BlogCardss;
