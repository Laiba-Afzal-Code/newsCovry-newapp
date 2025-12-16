// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { slugify } from "../../function/slugify";

const BlogCard = ({ post }) => {
  return (
    <>
      <div>
        <div className="b">
          <Link  to={`/post/${post._id}/${slugify(post.title)}/open`} className="blog-cardd">
            <div className="blog-card-image">
              <img
                src={post.image}
                alt="blog"
                width={220}
                height={300}
                className="imgcb"
              />
              <div className="cardcontent">
                <p className="bca">{post.category}</p>
                <p className="bca">
                  <strong>Author: </strong>
                  {post.author}
                </p>
                <h2 className="cardh">{post.title} </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
