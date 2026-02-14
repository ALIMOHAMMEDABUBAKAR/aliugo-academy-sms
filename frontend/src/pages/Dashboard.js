import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Dashboard</h2>

          <div className="cards">
            <div className="card">
              <h3>Total Students</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Total Classes</h3>
              <p>6</p>
            </div>

            <div className="card">
              <h3>Total Teachers</h3>
              <p>15</p>
            </div>
          </div>

          <div className="dashboard-info">
            <h3>System Overview</h3>
            <p>
              Welcome to Aliugo Academy Student Management System. From here you
              can manage students, registration, classes, and results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
