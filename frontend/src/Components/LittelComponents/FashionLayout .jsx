const FashionLayout = ({ posts, category }) => (
  <div className="category-page fashion">
    <h1>{category.toUpperCase()}</h1>

    <div className="fashion-masonry">
      {posts.map((post) => (
        <div key={post._id} className="fashion-card">
          <img src={post.image} />
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default FashionLayout;
