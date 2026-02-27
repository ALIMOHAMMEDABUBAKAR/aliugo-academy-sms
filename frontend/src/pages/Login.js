import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      // Save tokens & role
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("role", data.role);


      // Decode JWT to get role (we will do that using backend response later)
      // For now, we call /api/me/ endpoint after login (we will create it in backend later)

      // TEMP: assume admin for now
      // We will replace this later with actual role fetched from backend
      localStorage.setItem("role", "student");

      // Redirect based on role
      const role = localStorage.getItem("role");

      if (role === "admin") navigate("/admin");
      else if (role === "staff") navigate("/staff");
      else navigate("/student");

    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Aliugo Academy SMS</h2>
        <p>Login to continue</p>

        {error && <div className="error">{error}</div>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
