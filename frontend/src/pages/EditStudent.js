import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [student_class, setStudentClass] = useState("");
  const [gender, setGender] = useState("");

  // Fetch existing student details
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get(`students/${id}/`);
        setName(res.data.name);
        setStudentClass(res.data.student_class);
        setGender(res.data.gender);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  // Update student
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`students/${id}/`, {
        name,
        student_class,
        gender,
      });

      alert("Student Updated Successfully!");
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student!");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Edit Student</h2>

          <form className="student-form" onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Class"
              value={student_class}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
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
