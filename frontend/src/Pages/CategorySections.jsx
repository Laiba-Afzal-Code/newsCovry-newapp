import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../config";
import { Link, Links } from "react-router-dom";
import "./CategorySections.css";
import { linearGradient } from "motion/react-client";
import { slugify } from "../function/slugify";

// 🟦 1️⃣ Technology Section
function TechnologySection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}posts/category/tech`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="category-section tech-section">
      <>
        <h2 className="section-title">Technology</h2>
        <div className="card-row">
          {posts.slice(0, 3).map((post) => (
            <Link
              to={`/post/${post._id}/${slugify(post.title)}/open`}
              key={post._id}
              className="tech-card"
            >
              <img src={post.image} alt={post.title} />
              <div className="card-content">
                <p className="category">{post.category}</p>
                <h3>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </>
    </section>
  );
}

// 🟪 2️⃣ Global Tech Section
function GlobalTechSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}posts/category/global-tech`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="category-section globaltech-section">
      <h2 className="section-title purple">GLOBAL TECH</h2>
      <div className="card-row">
        {posts.slice(0, 6).map((post) => (
          <Link
            to={`/post/${post._id}/${slugify(post.title)}/open`}
            key={post._id}
            className="global-card"
          >
            <img src={post.image} alt={post.title} />
            <div className="glb">
              <p className="pdate">{new Date(post.createdAt).toDateString()}</p>
              <h3>{post.title}</h3>
              <p className="pdate">{post.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// 🟨 3️⃣ Business Section
function BusinessSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}posts/category/business`)
      //   .get(`${BACKEND_URL}posts/category/business`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="category-section business-section">
      <h2 className="section-title gold">BUSINESS</h2>
      <div className="business-list">
        {posts.slice(0, 9).map((post) => (
          <Link
            to={`/post/${post._id}/${slugify(post.title)}/open`}
            key={post._id}
            className="business-item"
          >
            <img src={post.image} alt={post.title} />
            <div className="busc">
              <div className="infobus">
                <p className="category">{post.category}</p>
                <p className="category">
                  {new Date(post.createdAt).toDateString()}
                </p>
              </div>
              <h3>{post.title.slice(0, 100)}...</h3>
              <div
                className="p"
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 50),
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FashionSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}posts/category/fashion`)
      //   .get(`${BACKEND_URL}posts/category/business`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="category-section business-section">
      <h2 className="section-title gold">FASHION</h2>
      <div className="fashion-list">
        {posts.slice(0, 3).map((post) => (
          <Link
            to={`/post/${post._id}/${slugify(post.title)}/open`}
            key={post._id}
            className="fashion-item"
          >
            <img src={post.image} alt={post.title} />
            <div className="busc">
              <div className="infobus">
                <p className="category">{post.category}</p>
                <p className="category">
                  {new Date(post.createdAt).toDateString()}
                </p>
              </div>
              <h3>{post.title.slice(0, 100)}...</h3>
              <div
                className="p"
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 50),
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ✅ 4️⃣ Main Component to render all
function CategorySections() {
  return (
    <div className="all-categories">
      <div className="rightc">
        <TechnologySection />
        <GlobalTechSection />
        <BusinessSection />
      </div>

      <div className="leftc">
        <TechnologySection />
        <GlobalTechSection />
        <FashionSection />
      </div>
    </div>
  );
}

export default CategorySections;
