import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function AddStudent() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Add Student</h2>

          <form className="student-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Class" required />

            <select required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <button type="submit">Save Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
