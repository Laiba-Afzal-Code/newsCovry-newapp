import express from "express";
import multer from "multer";
import { protect } from "../middleware/auth.js";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getSpecificPost,
  getLatest,
  getPostsByCategory,
  SearchResult,
} from "../controllers/postController.js";

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-newscovry-" + file.originalname),
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.json({ imageUrl });
});

// const upload = multer({ dest: "uploads/" });
const router = express.Router();
// Route: GET /api/posts/category/:category
router.get("/category/:category", getPostsByCategory);
router.get("/getallpost", getPosts);
router.get("/getSpecificCate", getSpecificPost);
router.get("/getlatest", getLatest);
// Make sure this is BEFORE any dynamic routes like /:id
router.get("/search", SearchResult);

router.get("/:id", getPost);
router.post("/postcreate", protect, upload.single("image"), createPost);
router.put("/update/:id", protect, upload.single("image"), updatePost);
router.delete("/:id", protect, deletePost);

export default router;
