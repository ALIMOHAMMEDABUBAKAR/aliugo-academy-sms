import React from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card } from "react-bootstrap";

export default function StudentProfile() {
  const student = {
    name: "Ali Mohammed",
    admissionNo: "SSS-2026-001",
    level: "Senior Secondary",
    className: "SSS 1A",
    gender: "Male",
    dateOfBirth: "15-02-2007",
    guardianPhone: "08000000000",
    address:"Potiskum, Yobe State",
  };

  return (
    <StudentLayout>
      <h3 className="page-title">My Profile</h3>

      <Card className="student-card">
        <Card.Body>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Admission No:</strong> {student.admissionNo}</p>
          <p><strong>Level:</strong> {student.level}</p>
          <p><strong>Class:</strong> {student.className}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
          <p><strong>Guardian Phone:</strong> {student.guardianPhone}</p>
          <p><strong>Address:</strong> {student.address}</p>
        </Card.Body>
      </Card>
    </StudentLayout>
  );
}
