import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
