import PostCard from "../Components/Destinations/Destinations.jsx";
import "./Pages.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../config";
import { toast } from "react-toastify";

const CateHome = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}posts/getallpost`);
      setPosts(res.data.posts);
    } catch (err) {
      toast.error("Failed to fetch posts");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="ca">
        <h2 className=" toppadd">All Posts</h2>

        <PostCard />
      </div>
    </>
  );
};

export default CateHome;
