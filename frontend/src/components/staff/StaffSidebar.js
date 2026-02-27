import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";

export default function StaffSidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Staff Panel</h2>

      <ul>
        <li>
          <NavLink to="/staff/dashboard" className="nav-link">
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff/students" className="nav-link">
            👨‍🎓 Students
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff/attendance" className="nav-link">
            📅 Attendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff/results" className="nav-link">
            📑 Results
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff/messages" className="nav-link">
            💬 Messages
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff/profile" className="nav-link">
            👤 Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}