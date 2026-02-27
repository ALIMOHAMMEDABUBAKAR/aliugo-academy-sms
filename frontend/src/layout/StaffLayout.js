import React from "react";
import StaffSidebar from "../components/staff/StaffSidebar";
import StaffNavbar from "../components/staff/StaffNavbar";
import "../styles/dashboard.css";

export default function StaffLayout({ children }) {
  return (
    <div className="layout">
      <StaffSidebar />

      <div className="main">
        <StaffNavbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
