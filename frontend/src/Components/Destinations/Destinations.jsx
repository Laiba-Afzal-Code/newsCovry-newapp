// components/Destinations.js

import "./Destinations.css";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";
import { slugify } from "../../function/slugify";

function Destinations() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}posts/getallpost`);

      // ✅ Make sure data exists and has posts
      if (res.data && Array.isArray(res.data.posts)) {
        setPosts(res.data.posts);
        
      } else {
        console.error("Unexpected API response:", res.data);
        toast.error("Unexpected data format from server");
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  if (loading)
    return (
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  return (
    <div className="dds">
      <section className="destinations">
        {posts.map((post) => (
          <motion.div
            className="destination-card"
            key={post._id} // ✅ use _id for key
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Link to={`/post/${post._id}/${slugify(post.title)}/open`} className="a">
              <div className="imgcared">
                <img src={post.image} alt={post.title} />
                <p className="pcate">{post.category}</p>
              </div>
              <div className="aat">

             
              <div className="info">
                <p className="p">
                  <strong>Author: </strong>
                  {post.author}
                </p>
                <p className="p">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>

              </div>
              <h3>{post.title.slice(0, 50)}...</h3>
              {/* Render HTML content safely */}
              <div
                className="p"
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 50),
                }}
              />
               </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Destinations;
