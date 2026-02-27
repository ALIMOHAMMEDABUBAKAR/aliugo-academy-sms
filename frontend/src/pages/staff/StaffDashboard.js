import React from "react";
import Sidebar from "../../components/staff/StaffSidebar";
import StaffNavbar from "../../components/staff/StaffNavbar";
import StaffLayout from "../../layout/StaffLayout";
import "../../styles/dashboard.css";

export default function StaffDashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <StaffNavbar />

        <div className="content">
          <h2>Staff Dashboard</h2>

          <div className="cards">
            <div className="card">
              <h3>My Students</h3>
              <p>45</p>
            </div>

            <div className="card">
              <h3>Attendance Today</h3>
              <p>--</p>
            </div>

            <div className="card">
              <h3>Classes Assigned</h3>
              <p>3</p>
            </div>

            <div className="card">
              <h3>Pending Results</h3>
              <p>12</p>
            </div>
          </div>

          <div className="dashboard-info">
            <h3>Staff Overview</h3>
            <p>
              Welcome to Aliugo Academy SMS Staff Panel. Here you can manage
              student attendance, upload results, and view assigned classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
