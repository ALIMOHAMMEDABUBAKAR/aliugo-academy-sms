import React, { useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { Button, Table } from "react-bootstrap";

export default function StaffAttendance() {
  const [attendance, setAttendance] = useState([
    { id: 1, name: "Ali Mohammed", present: false },
    { id: 2, name: "Aisha Umar", present: false },
  ]);

  const toggleAttendance = (id) => {
    setAttendance((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <StaffLayout>
      <h2>Attendance</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Status</th>
            <th>Mark</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                {student.present ? (
                  <span className="text-success">Present</span>
                ) : (
                  <span className="text-danger">Absent</span>
                )}
              </td>
              <td>
                <Button
                  variant={student.present ? "danger" : "success"}
                  size="sm"
                  onClick={() => toggleAttendance(student.id)}
                >
                  {student.present ? "Mark Absent" : "Mark Present"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </StaffLayout>
  );
}
