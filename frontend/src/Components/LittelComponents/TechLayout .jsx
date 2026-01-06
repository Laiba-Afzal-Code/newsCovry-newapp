const TechLayout = ({ posts, category }) => (
  <div className="category-page">
    <h1 className="category-title">{category}</h1>

    <div className="tech-grid">
      {posts.map((post) => (
        <div key={post._id} className="tech-card">
          <img src={post.image} />
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default TechLayout;
