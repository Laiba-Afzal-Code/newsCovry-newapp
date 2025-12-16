// File: src/components/login/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import "./login.css";
import BACKEND_URL from "../../config";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    // 👇 Go back to previous page
    navigate("/");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post(`${BACKEND_URL}auth/login`, {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login successful!");
      navigate("/admin"); // go to admin after login
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );

  return (
    <>
      <div className="form">
        <form onSubmit={handleLogin} className="loginform">
          <h2 className="loghead">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="loginput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="loginput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="logbtn">
            Login
          </button>
          <p className="singuplink">
            <a href="/register" className="signupa">
              SignUp
            </a>
          </p>
          <button onClick={handleClose} className="crosbtn">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                d="m6 6l12 12m0-12L6 18"
                stroke-width="1"
              />
            </svg>
          
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
