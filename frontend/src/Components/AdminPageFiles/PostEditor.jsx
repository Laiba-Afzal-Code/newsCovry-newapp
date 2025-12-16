import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../config";
import { toast } from "react-toastify";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // ✅ Fetch post data when editing
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}posts/${id}`)
      .then((res) => {
        const post = res.data;
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category);
        // show existing image if available
        if (post.image) {
          setPreview(`${BACKEND_URL}${post.image}`);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load post");
      });
  }, [id]);

  // ✅ Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Submit update
 const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  if (!token) return toast.error("Unauthorized");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("category", category);
  if (image) formData.append("image", image);

  try {
    await axios.put(`${BACKEND_URL}posts/update/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Post updated successfully!");
    navigate("/admin/posts");

  } catch (err) {
    console.error(err);
    if (err.response?.status === 401) {
      toast.error("Unauthorized! Login again.");
    } else {
      toast.error("Update failed");
    }
  }
};

  return (
    <>
      <h2 className="dashhead">✏️ Edit Post</h2>
      <form onSubmit={handleSubmit} className="createform">
        {/* Title */}
        <input
          type="text"
          placeholder="Write Title Here..."
          className="postinput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          className="postinput"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
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
          <span>Upload an Image to Update</span>
          <input
            type="file"
            className="postimg"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* Image Preview */}
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

        {/* ✅ ReactQuill Editor instead of textarea */}
        <div className="editor-container" style={{ marginTop: "20px" }}>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Edit your blog content..."
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
          Update Post
        </button>
      </form>
    </>
  );
};

export default PostEditor;
