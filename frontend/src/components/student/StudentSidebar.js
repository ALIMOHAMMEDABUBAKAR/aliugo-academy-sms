import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/studentDashboard.css";

export default function StudentSidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`student-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3 className="logo">Aliugo SMS</h3>
        <button className="close-btn" onClick={closeSidebar}>
          ✖
        </button>
      </div>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/student/dashboard" className="nav-link" onClick={closeSidebar}>
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/profile" className="nav-link" onClick={closeSidebar}>
            👤 Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/results" className="nav-link" onClick={closeSidebar}>
            📑 Results
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/attendance" className="nav-link" onClick={closeSidebar}>
            📅 Attendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/messages" className="nav-link" onClick={closeSidebar}>
            💬 Messages
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
