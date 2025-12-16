// File: src/components/AdminLayout.jsx
import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Admin.css";
import { useAuth } from "../../auth/AuthContext";
const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="flexnav">
        <div className="fh">
          <nav className="adminnav">
            <div
              className={`admin-menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`adminul ${menuOpen ? "show" : ""}`}>
              <li className="liadmin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.722 5.5a8.226 8.226 0 0 1 8.222 8.222v8.222h-8.222A8.226 8.226 0 0 1 5.5 13.722h0A8.226 8.226 0 0 1 13.722 5.5m20.556 0a8.226 8.226 0 0 1 8.222 8.222h0a8.226 8.226 0 0 1-8.222 8.222h-8.222v-8.222A8.226 8.226 0 0 1 34.278 5.5M13.722 26.056h8.222v8.222a8.226 8.226 0 0 1-8.222 8.222h0A8.226 8.226 0 0 1 5.5 34.278h0a8.226 8.226 0 0 1 8.222-8.222m12.334 0h8.222a8.226 8.226 0 0 1 8.222 8.222h0a8.226 8.226 0 0 1-8.222 8.222h0a8.226 8.226 0 0 1-8.222-8.222z"
                    stroke-width="1.7"
                  />
                </svg>
                <Link to="/admin" className="liadmin">
                  Dashboard
                </Link>
              </li>
              <li className="liadmin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="#fff" stroke-width="1">
                    <path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z" />
                    <path
                      stroke-linecap="round"
                      d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"
                    />
                  </g>
                </svg>
                <Link to="/admin/posts" className="liadmin">
                  Posts
                </Link>
              </li>
              <li className="liadmin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-width="1"
                    d="M12 7.5v9M7.5 12h9M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-9.8 8c.169-.83.44-1.623.8-2.364M6 4a10 10 0 0 0-2 1.999M10 2.2c-.83.168-1.623.44-2.364.8"
                  />
                </svg>
                <Link to="/admin/posts/new" className="liadmin">
                  New Post
                </Link>
              </li>
            </ul>
            <button onClick={handleLogout} className="logout">
              LogOut
            </button>
          </nav>
          <main className="outlet">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
