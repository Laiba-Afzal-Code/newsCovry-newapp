import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState(""); // 🧩 for SEO keywords
  const [backlink, setBacklink] = useState(""); // 🔗 backlink input
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  // Image Preview Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) return toast.error("Unauthorized");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("keywords", keywords);
    formData.append("backlink", backlink);
    formData.append("author", user?.name || "Unknown");
    formData.append("image", image);

    try {
      await axios.post(`${BACKEND_URL}posts/postcreate`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("✅ Blog post created successfully!");
      navigate("/admin/posts");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "❌ Post creation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="createform">
      <h2 className="dashhead">📝 Create New Blog Post</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Write title here..."
        className="postinput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Category */}
      <input
        type="text"
        placeholder="Category (e.g. Home Decor)"
        className="postinput"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      {/* Keywords */}
      <input
        type="text"
        placeholder="Add keywords (comma separated, e.g. wall decor, home, art)"
        className="postinput"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />

      {/* Backlink */}
      <input
        type="url"
        placeholder="Add backlink (optional)"
        className="postinput"
        value={backlink}
        onChange={(e) => setBacklink(e.target.value)}
      />

      {/* Image Upload */}
      <label className="postimage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path
            fill="gray"
            d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
            strokeWidth="1.5"
            stroke="gray"
          />
          <path
            fill="gray"
            d="M16 24h18v2H16z"
            strokeWidth="1.5"
            stroke="gray"
          />
          <path
            fill="gray"
            d="M24 16h2v18h-2z"
            strokeWidth="1.5"
            stroke="gray"
          />
        </svg>
        <span>Upload an Image</span>

        <input
          type="file"
          className="postimg"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="imgpreview"
          style={{
            marginTop: "10px",
            borderRadius: "10px",
            maxHeight: "200px",
            objectFit: "cover",
          }}
        />
      )}

      {/* React Quill Editor */}
      <div className="editor-container" style={{ marginTop: "20px" }}>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Write your blog content here..."
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "blockquote", "code-block"],
              ["clean"],
            ],
          }}
          className="bg-white border rounded-xl"
        />
      </div>

      <button type="submit" className="postbtn">
        Publish Blog
      </button>
    </form>
  );
};

export default PostCreate;
