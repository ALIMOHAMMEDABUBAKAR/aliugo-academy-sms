import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Aliugo Academy</h2>

      <ul>
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>
        <li>
          <Link to="/students">👨‍🎓 Manage Students
</Link>
        </li>
        <li>
          <a href="/register-student">➕ Student Registration</a>
        </li>
        <li>
          <Link to="/">🚪 Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
