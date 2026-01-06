// components/Experience.js

import "./Experience.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";
import * as motion from "motion/react-client";
import { slugify } from "../../function/slugify";

function Experience() {
  const [posts, setPosts] = useState([]);
  const [latest, setLatest] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}posts/getallpost`);
      setPosts(res.data.posts.slice(0, 1));
    } catch (err) {
      toast.error("Failed to fetch posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}posts/getlatest`);
        setLatest(res.data.slice(1, 10));
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };
    fetchLatestPosts();
  }, []);

  return (
    <section className="experience">
      {/* Featured Post */}
      {posts.map((post) => (
        <div className="experien" key={post._id}>
          <h1 className="headexpi">
            {post.category} <div className="linedesign"></div>
          </h1>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }}>
            <Link to={`/post/${post._id}/${slugify(post.title)}/open`} className="experience-text">
              <img
                src={post.image}
                alt={post.title}
                width={500}
                height={400}
                className="picccard"
              />
              <div className="gh">
                <div className="info">
                  <p className="expiBp">{post.category}</p>
                  <p className="expiBp">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <h2 className="expiThead">{post.title}</h2>
                {/* Render HTML content preview */}
                <div
                  className="expiBp"
                  dangerouslySetInnerHTML={{
                    __html: post.content.slice(0, 50),
                  }}
                />
              </div>
            </Link>
          </motion.div>
        </div>
      ))}

      {/* Latest Articles */}
      <div className="experien">
        <h1 className="headexpi">
          Latest Articles <div className="linedesign"></div>
        </h1>

        <div className="experience-bar">
          {latest.map((post) => (
            <Link
              to={`/post/${post._id}/${slugify(post.title)}/open`}
              className="experience-bar-text"
              key={post._id}
            >
              <div className="ebi">
                <img src={post.image} alt={post.title} className="barimg" />
              </div>
              <div className="bar-text">
                <div className="bloginfo">
                  <p className="expiBps">{post.category}</p>
                  <p className="expiBps">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <h2 className="expibThed">{post.title.slice(0, 100)}...</h2>
                {/* Render HTML content preview */}
                <div
                  className="expiBps"
                  dangerouslySetInnerHTML={{
                    __html: post.content.slice(0, 50),
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
