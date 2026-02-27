import React, { useState } from "react";
import { Button, Dropdown, Badge } from "react-bootstrap";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

export default function StudentNavbar({ openSidebar, toggleDarkMode, darkMode }) {
  const [notifications] = useState([
    { id: 1, text: "New exam timetable uploaded." },
    { id: 2, text: "Attendance updated." },
    { id: 3, text: "School resumes Monday." },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_role");
    window.location.href = "/login";
  };

  return (
    <div className="student-navbar">
      <button className="menu-btn" onClick={openSidebar}>
        ☰
      </button>

      <h4 className="navbar-title">Student Dashboard</h4>

      <div className="navbar-actions">

        {/* Notification Bell */}
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" className="notification-btn">
            <FaBell />
            <Badge bg="danger" className="notification-badge">
              {notifications.length}
            </Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu className="notification-menu">
            {notifications.length === 0 ? (
              <Dropdown.Item>No notifications</Dropdown.Item>
            ) : (
              notifications.map((note) => (
                <Dropdown.Item key={note.id}>
                  {note.text}
                </Dropdown.Item>
              ))
            )}
          </Dropdown.Menu>
        </Dropdown>

        {/* Dark Mode Toggle */}
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <Button variant="danger" size="sm" onClick={handleLogout}>
          Logout
        </Button>

      </div>
    </div>
  );
}