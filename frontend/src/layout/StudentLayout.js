import React, { useState, useEffect } from "react";
import StudentSidebar from "../components/student/StudentSidebar";
import StudentNavbar from "../components/student/StudentNavbar";
import "../styles/studentDashboard.css";

export default function StudentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("student_dark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("student_dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`student-layout ${darkMode ? "dark" : ""}`}>
      <StudentSidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className="student-main">
        <StudentNavbar
          openSidebar={() => setSidebarOpen(true)}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />

        <div className="student-content">{children}</div>
      </div>
    </div>
  );
}