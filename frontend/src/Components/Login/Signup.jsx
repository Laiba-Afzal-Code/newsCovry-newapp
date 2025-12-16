// File: src/components/login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./login.css";
import BACKEND_URL from "../../config";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClose = () => {
        // 👇 Go back to previous page
        navigate(-1);
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_URL}auth/register`, {
                name,
                email,
                password,
            });
            toast.success("Registration successful!");
            navigate("/login");
        } catch (err) {
            toast.error("Registration failed!");
            console.error(err);
        }
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleRegister} className="loginform">
                    <h2 className="loghead">SignUp</h2>
                    <input
                        type="name"
                        placeholder="Name"
                        className="loginput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="loginput"
                        value={email}
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
                        Register
                    </button>
                    <p className="singuplink"><a href="/login" className="signupa">LogIn</a></p>
                <button onClick={handleClose} className="crosbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" d="m6 6l12 12m0-12L6 18" stroke-width="1" /></svg></button>
                </form>
            </div>
        </>
    );
};

export default Signup;
