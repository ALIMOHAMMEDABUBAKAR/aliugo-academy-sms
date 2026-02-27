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
      // Step 1: Authenticate and get tokens
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      const { access, refresh } = res.data;

      // Step 2: Save tokens to localStorage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      // Step 3: Fetch user profile to get role
      const userRes = await axios.get("http://127.0.0.1:8000/api/me/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      const { role } = userRes.data;

      // Step 4: Save role to localStorage
      localStorage.setItem("role", role);

      // Step 5: Redirect based on role
      if (role === "ADMIN") navigate("/admin");
      else if (role === "STAFF") navigate("/staff");
      else navigate("/student");

    } catch (err) {
      console.error("Login error:", err);
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
