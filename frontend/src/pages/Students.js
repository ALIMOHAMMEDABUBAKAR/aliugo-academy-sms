import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await API.get("students/");
      setStudents(res.data);
      setError("");
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    document.title = "Manage Students | Aliugo Academy";
  }, []);

  // Delete student
  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await API.delete(`students/${id}/`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
      setError("Failed to delete student");
    }
  };

  if (loading) {
    return (
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Navbar />
          <div className="content">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Manage Students</h2>

          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Admission No</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.student_class}</td>
                    <td>{student.gender}</td>
                    <td>{student.admission_no}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => navigate(`/students/edit/${student.id}`)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
