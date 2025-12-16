// App.js
import Home from "./Components/Home/Home";
import "./App.css";
import CategoryPage from "./Pages/CategoryPage";
import CateHome from "./Pages/CateHome";
import Footer from "./Components/Footone/Footone";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About.jsx";

import { motion, useScroll } from "motion/react";
import Blogopen from "./Components/Blogopen/Blogopen.jsx";
import NotFoundPage from "./Pages/NotFoundPage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./Components/AdminPageFiles/AdminLayout.jsx";
import Dashboard from "./Components/AdminPageFiles/Dashboard";
import PostList from "./Components/AdminPageFiles/PostList";
import PostEditor from "./Components/AdminPageFiles/PostEditor";
import Login from "./Components/Login/Login.jsx";
import { AuthProvider } from "./auth/AuthContext";
import Signup from "./Components/Login/Signup.jsx";
import PostCreate from "./Components/AdminPageFiles/PostCreate.jsx";
import AllPosts from "./Components/Allposts/AllPosts.jsx";
import Navbar from "./Components/LittelComponents/Navbar.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import SearchResults from "./Pages/SearchResults.jsx";
import LatestPostsCarousel from "./Components/PostsCarousel/LatestPostsCarousel.jsx";
import Linkedin from "./Components/LinkedIn/Linkedin.jsx";
import ScrollToTop from "./function/ScrollToTop.js";
import CateShow from "./Components/CateShow/CateShow.jsx";
import AuthorPage from "./Pages/AuthorPage.jsx";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="App">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            originX: 0,
            backgroundColor: "gray",
            zIndex: 9999,
          }}
        />
        <ToastContainer />

        <Router>
          {/* ⬇️ Navbar OUTSIDE AuthProvider */}
          <Navbar />

          {/* AuthProvider should wrap only what needs auth */}
          <ScrollToTop />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catehome" element={<CateHome />} />
              <Route path="/LinkedIn" element={<Linkedin />} />
              <Route path="/category/showcard" element={<CateShow />} />
              <Route
                path="/latestpostscarousel"
                element={<LatestPostsCarousel />}
              />
              <Route path="/category/:category" element={<CategoryPage />} />
              {/* <Route path="/category/:category" element={<CategoryPosts />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/allblogposts" element={<AllPosts />} />
              <Route path="/about/privacy" element={<About />} />
              <Route path="/post/:id/:slug/open" element={<Blogopen />} />
              <Route path="*" element={<NotFoundPage />} />

              {/* Auth Pages */}
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
<Route path="/author/:name" element={<AuthorPage />} />
              <Route path="/search" element={<SearchResults />} />

              {/* Admin Protected Routes */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="posts" element={<PostList />} />
                <Route path="posts/new" element={<PostCreate />} />
                <Route path="posts/:id/edit" element={<PostEditor />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
