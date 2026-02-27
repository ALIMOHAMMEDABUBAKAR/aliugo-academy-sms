import React, { useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { Table, Form } from "react-bootstrap";

export default function StaffStudents() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 1, name: "Ali Mohammed", level: "SSS", className: "SSS 1" },
    { id: 2, name: "Aisha Umar", level: "JSS", className: "JSS 2" },
  ];

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <StaffLayout>
      <h2>Students</h2>

      <Form.Control
        type="text"
        placeholder="Search student..."
        className="mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Level</th>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>{student.className}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </StaffLayout>
  );
}
