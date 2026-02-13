import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchStudents = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/students/");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:8000/api/students/create/", {
      name: name,
      email: email,
    });

    setName("");
    setEmail("");
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/students/delete/${id}/`);
    fetchStudents();
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Students List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>
              {student.name} - {student.email}
            </span>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
