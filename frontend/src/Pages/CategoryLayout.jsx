
const CategoryLayout = ({ posts }) => {
  // 🧠 layout based on post count & media
  const GridLayout = ({ posts }) => (
  <div className="grid-layout">
    {posts.map((post) => (
      <article key={post._id}>
        <img src={post.image} alt={post.title}/>
        <h3>{post.title}</h3>
      </article>
    ))}
  </div>
);
const ListLayout = ({ posts }) => (
  <div className="list-layout">
    {posts.map((post) => (
      <article key={post._id}>
        <h3>{post.title}</h3>
        <p>{new Date(post.createdAt).toDateString()}</p>
      </article>
    ))}
  </div>
);
const ImageLayout = ({ posts }) => (
  <div className="image-layout">
    {posts.map((post) => (
      <article key={post._id}>
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
      </article>
    ))}
  </div>
);

  if (posts.length >= 8) {
    return <GridLayout posts={posts} />;
  }

  if (posts.some((p) => p.image)) {
    return <ImageLayout posts={posts} />;
  }

  return <ListLayout posts={posts} />;
};

export default CategoryLayout;
