import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Aliugo Academy</h2>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <small>© {new Date().getFullYear()} Aliugo Academy SMS</small>
      </div>
    </div>
  );
}

export default Login;
