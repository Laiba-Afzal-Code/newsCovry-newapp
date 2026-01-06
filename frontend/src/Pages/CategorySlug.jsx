import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../config";
import CategoryLayout from "./CategoryLayout";

const CategorySlug = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/posts/getallpost`)
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  // ✅ Filter posts by category from backend
  const categoryPosts = posts.filter((post) => {
    if (post.category?.slug) return post.category.slug === slug;
    return post.category === slug;
  });

  if (!categoryPosts.length) {
    return <h2>No posts found</h2>;
  }

  return (
    <div className="category-page">
      {/* ✅ CATEGORY NAME FROM API */}
      <h1 className="category-title">
        {categoryPosts[0].category?.name || slug.toUpperCase()}
      </h1>

      <CategoryLayout posts={categoryPosts} />
    </div>
  );
};

export default CategorySlug;
