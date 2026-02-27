import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../styles/dashboard.css";

export default function StaffNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_role");

    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3 className="navbar-title">Aliugo Academy - Staff Panel</h3>

      <div className="navbar-right">
        <span className="navbar-user">Staff</span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
