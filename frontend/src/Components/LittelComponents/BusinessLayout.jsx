const BusinessLayout = ({ posts, category }) => (
  <div className="category-page">
    <h1>{category.toUpperCase()}</h1>

    {posts.map((post) => (
      <div key={post._id} className="business-row">
        <img src={post.image} />
        <div>
          <h3>{post.title}</h3>
          <p>{new Date(post.createdAt).toDateString()}</p>
        </div>
      </div>
    ))}
  </div>
);

export default BusinessLayout;
