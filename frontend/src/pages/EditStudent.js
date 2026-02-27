import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [othername, setOthername] = useState("");
  const [class_applying, setClassApplying] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch existing student details
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get(`students/${id}/`);
        setSurname(res.data.surname);
        setFirstname(res.data.firstname);
        setOthername(res.data.othername || "");
        setClassApplying(res.data.class_applying);
        setGender(res.data.gender);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student:", error);
        setError("Failed to load student details");
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  // Update student
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`students/${id}/`, {
        surname,
        firstname,
        othername,
        class_applying,
        gender,
      });

      alert("Student Updated Successfully!");
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error);
      setError("Failed to update student!");
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
          <h2>Edit Student</h2>

          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <form className="student-form" onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Other Name"
              value={othername}
              onChange={(e) => setOthername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Class"
              value={class_applying}
              onChange={(e) => setClassApplying(e.target.value)}
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
