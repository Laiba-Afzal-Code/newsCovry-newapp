import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    keywords: {
      type: String, // e.g. "home decor, wall art, interior design"
      default: "newscovry blogPost artical dailynews latestnews",
      trim: true,
    },
    backlink: {
      type: String, // e.g. "https://www.homedecorim.com"
      default: "",
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);

