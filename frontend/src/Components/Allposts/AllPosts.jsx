import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";
import "./allposts.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CateShow from "../CateShow/CateShow";
import { slugify } from "../../function/slugify";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const limit = 16;

  // Load posts normally (not search)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${BACKEND_URL}posts/getallpost?page=${page}&limit=${limit}`
        );

        setPosts(res.data.posts || res.data);
        if (res.data.pages) setPages(res.data.pages);

      } catch (error) {
        console.error(error);
        toast.error("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };


    fetchPosts()
  }, [page]);

  const nextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

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
      {/* ENABLE Navbar with search */}
      {/* <Navbar setSearchResults={setSearchResults} /> */}

      <div className="allposts-container">
        <h1 className="allposts-title"> All Blog Posts
        </h1>

       
          <>
            {/* Normal Posts */}
            <div className="posts-grid">
              {posts.map((post) => (
                <div key={post._id} className="post-card">
                  <img
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    className="post-image"
                  />
                  <div className="post-content">
                    <div className="infoa">
                      <p className="p">Author: {post.author}</p>
                      <p className="p">{post.category}</p>
                        {/* <p className="p">{post.createdAt.split("T")[0]}</p> */}
                    </div>
                    <h2 className="post-title">{post.title}</h2>

                    <div
                      className="post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.content.slice(0, 40),
                      }}
                    />

                    <Link to={`/post/${post._id}/${slugify(post.title)}/open`}  className="read-more-btn">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination only when NOT searching */}
            <div className="paginationn">
              <button
                className="arrow-btn"
                disabled={page === 1}
                onClick={prevPage}
              >
                ← Previous
              </button>

              <span>
                Page {page} {pages > 1 ? `of ${pages}` : ""}
              </span>

              <button
                className="arrow-btn"
                disabled={page === pages}
                onClick={nextPage}
              >
                Next →
              </button>
            </div>
          </>
        <CateShow/>
      </div>
    </>
  );
};

export default AllPosts;
