import sanitizeHtml from "sanitize-html"; // 👈 Add this at the top of your controller file
import Post from "../models/Post.js";
 

 export const SearchResult = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ message: "No search query" });

    const posts = await Post.find({
      title: { $regex: query, $options: "i" }, // case-insensitive search
    });

    res.status(200).json({ posts });
  } catch (err) {
    console.error("Search API error:", err);
    res.status(500).json({ message: "Search failed", error: err.message });
  }
}
// ✅ Get All Posts (with Pagination)
export const getPosts = async (req, res) => {
  try {
    // Page number and limit from query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 16;
    const skip = (page - 1) * limit;

    // Fetch posts with pagination and total count
    const [posts, total] = await Promise.all([
      Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Post.countDocuments(),
    ]);

    res.json({
      posts,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts." });
  }
};
// get latest posts
export const getLatest = async (req, res)=>{
 try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch latest posts." });
  }
}

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ msg: "Post not found" });
  res.json(post);
};
// CREATE POST
export const createPost = async (req, res) => {
  try {
    const { title, content, category, keywords, backlink } = req.body;
    const author = req.user.name;

    // 🧼 Sanitize HTML content from ReactQuill
    const cleanContent = sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "a"]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        a: ["href", "target", "rel"],
        img: ["src", "alt"],
      },
    });

    // 🖼️ Build full image URL if uploaded
    const image = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    // 📝 Create new post with sanitized content
    const post = await Post.create({
      title,
      content: cleanContent,
      category,
      keywords,
      backlink,
      author,
      image,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error("Create Post Error:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
};

// get spacfic gategory

export const getSpecificPost = async (req, res) => {
  try {
    const category = req.query.category;
    let posts;
    if (category) {
      posts = await Post.find({category});
    } else {
      posts = await Post.find();
    }

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get posts." });
  }
};

// ✅ Get posts by category
export const getPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // URL param e.g. /posts/category/technology
    const posts = await Post.find({ category }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category posts", error });
  }
};


// UPDATE POST

export const updatePost = async (req, res) => {
  try {
    const { title, content, category, keywords, backlink } = req.body;

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: "Post not found" });

    // 🧼 Sanitize the HTML content to prevent XSS
    const cleanContent = sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "a"]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        a: ["href", "target", "rel"],
        img: ["src", "alt"],
      },
    });

    // Use old image if no new file is uploaded
    const updatedImage = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : post.image;

    // Update fields safely
    post.title = title || post.title;
    post.content = cleanContent || post.content;
    post.category = category || post.category;
    post.keywords = keywords || post.keywords;
    post.backlink = backlink || post.backlink;
    post.image = updatedImage;

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update post" });
  }
};



export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ msg: "Post not found" });
  res.json({ msg: "Deleted" });
};
