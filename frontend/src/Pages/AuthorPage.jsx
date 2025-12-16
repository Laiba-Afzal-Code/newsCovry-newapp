// src/components/AuthorPage.jsx
import "./Authorpage.css";
import haiderali from "../images/haiderauthor.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Helper to slugify titles
const slugify = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const AuthorPage = () => {
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

    fetchPosts();
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
    <div className="author-page p-6 max-w-3xl mx-auto bg-gray-50 rounded shadow">
      {/* Author Card */}
      <div className="author-card flex items-center gap-4 mb-6">
        <img
          src={haiderali}
          alt={"newscovry Blog writer"}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">Haider Ali</h2>
          <p className="text-gray-600">
            Backend Software Engineer with robust problem-solving skills and
            proven experience in creating high -demanding servers. With
            knowledge and proficiency in Node js as well as strong skills and
            ability in writing clean and efficient code. I have broad knowledge
            of backend application development and also knowledge of DevOps
            workflows.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-2 author-social ">
            <a
              href={"https://www.linkedin.com/in/haider-ali-208504228/"}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                />
              </svg>
            </a>

            <a
              href={"https://github.com/IamHaiderr"}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Author Card */}
      <div className="author-card flex items-center gap-4 mb-6">
        <img
          src={
            "https://img.freepik.com/premium-photo/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5510.jpg?w=2000"
          }
          alt={"newscovry Blog writer"}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">Laiba Afzal</h2>
          <p className="text-gray-600">
            SEO Expert with Frontend & Backend developer. Loves creating clean
            and functional designs | JavaScript | React JS | Bootstrap / CSS |
            Software Developer | UX/UI Designer | Guest Post SEO Backlinks | "I
            Code what's your superpower?"
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-2 author-social ">
            <a
              href={
                "https://www.linkedin.com/in/laiba-afzal-frontend-developer/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                />
              </svg>
            </a>

            <a
              href={"https://github.com/Laiba-Afzal-Code"}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Author Posts */}
      <div className="author-posts">
        <h3 className="text-xl font-bold mb-2">Posts by this authors</h3>
        {posts.length > 0 ? (
          <ul className="list-disc list-inside">
            {posts.map((post) => (
              <li key={post._id} className="mb-1">
                <p>{post.category}</p>
                <Link
                  to={`/post/${post._id}/${slugify(post.title)}/open`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available for this author.</p>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
