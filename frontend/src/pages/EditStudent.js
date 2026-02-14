import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import { useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Edit Student (ID: {id})</h2>

          <form className="student-form">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Class" />

            <select>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <button type="submit">Update Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
