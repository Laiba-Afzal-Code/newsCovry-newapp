import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../config";
import * as motion from "motion/react-client";
import { slugify } from "../function/slugify";
const CategoryPage = () => {
  // const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!category) return;

    const fetchCategoryPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}posts/category/${category}`);
        setPosts(res.data.posts || res.data); // ✅ default empty array
      } catch (err) {
        console.error("Error fetching category posts:", err);
        setPosts(posts);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryPosts();
  }, [category]);
  if (loading)
    return (
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );

  return (
    <>
      {/* <Navbar /> */}
      <div className="cf">
        <h1 className=" toppadd">{category} category blogs posts </h1>
        <div className="ddcate">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <motion.div
                className="cate-card"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
              >
                <Link  to={`/post/${post._id}/${slugify(post.title)}/open`} className="a" key={post.id}>
                  <div className="imgcared">
                    <img src={post.image} alt={post.title} />
                    <p className="pcate">{post.category}</p>
                  </div>
                  <div className="ppt">
                    <div className="info">
                      <p className="p">
                        <strong>Author: </strong>
                        {post.author}
                      </p>
                      <p className="p">{post.createdAt.split("T")[0]}</p>
                    </div>
                    <h3>{post.title.slice(0, 50)}...</h3>
                    <div
                      className="p"
                      dangerouslySetInnerHTML={{
                        __html: post.content.slice(0, 50),
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="notcate">No posts found in this category:(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
// This code defines a CategoryPage component that filters and displays posts based on the selected category.
// It uses the useParams hook from react-router-dom to extract the category name from the URL.
