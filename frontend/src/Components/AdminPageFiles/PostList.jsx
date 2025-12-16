import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Admin.css";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const limit = 16;
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}posts/getallpost`);
      setPosts(res.data.posts || res.data);
      if (res.data.pages) setPages(res.data.pages);
    } catch (err) {
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${BACKEND_URL}posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Post deleted");
      fetchPosts();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
      <div className="postlist">
        <h2 className="dashhead">All Posts</h2>
        <Link to="/admin/posts/new" className="createlink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            fill="green"
            d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
            strokeWidth="1.5"
            stroke="green"
          />
          <path
            fill="green"
            d="M16 24h18v2H16z"
            strokeWidth="1.5"
            stroke="green"
          />
          <path
            fill="green"
            d="M24 16h2v18h-2z"
            strokeWidth="1.5"
            stroke="green"
          />
        </svg>
          Create New Post
        </Link>
        <div className="postlists">
          <div className="posttoedit">
            {posts.map((post) => (
              <div key={post._id} className="cardlict">
                <div className="img">
                  <img
                    src={post.image}
                    alt={post.category}
                    className="imglist"
                  />
                  <p className="pcate">{post.category}</p>
                </div>
                <h3 className="ptitle">{post.title.slice(0, 50)}...</h3>
                {/* <p className="pdate" >{new Date(post.createdAt).toLocaleString()}</p> */}
                <div
                  className="pdate"
                  dangerouslySetInnerHTML={{
                    __html: post.content.slice(0, 30),
                  }}
                />
                <div className="eidtbetndel">
                  <Link to={`${post._id}/edit`} className="peidtbtn">
                    Edit
                  </Link>
                  <p className="pdate">{post.createdAt.split("T")[0]}</p>
                  <button
                    onClick={() => deletePost(post._id)}
                    className="delbtn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination only when NOT searching */}
        <div className="pagination">
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
      </div>
    </>
  );
};

export default PostList;
