import Hero from "../Hero/Hero.jsx";
import Experience from "../Experience/Experience.jsx";
import CateHome from "../../Pages/CateHome.jsx";
import CategorySections from "../../Pages/CategorySections.jsx";
import Linkedin from "../LinkedIn/Linkedin.jsx";
import CateShow from "../CateShow/CateShow.jsx";
import BlogGrid from "../BlogGrid/BlogGrid.jsx";
const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Experience />
        <CategorySections />
        <CateShow/>
        <CateHome />
        <BlogGrid/>
        <Linkedin/>
      </div>
    </>
  );
};

export default Home;
