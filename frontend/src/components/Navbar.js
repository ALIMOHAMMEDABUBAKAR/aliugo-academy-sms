import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3>Aliugo Academy Dashboard</h3>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}
