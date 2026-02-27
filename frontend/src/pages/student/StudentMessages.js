import React from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card } from "react-bootstrap";

export default function StudentMessages() {
  const messages = [
    {
      title: "School Announcement",
      body: "School resumes on Monday. Ensure you come early.",
      date: "2026-02-15",
    },
    {
      title: "Exam Notice",
      body: "SSS 1 Exam begins next week. Prepare well.",
      date: "2026-02-14",
    },
  ];

  return (
    <StudentLayout>
      <h3 className="page-title">Messages</h3>

      {messages.map((msg, index) => (
        <Card className="student-card mb-3" key={index}>
          <Card.Body>
            <Card.Title>{msg.title}</Card.Title>
            <Card.Text>{msg.body}</Card.Text>
            <small className="text-muted">{msg.date}</small>
          </Card.Body>
        </Card>
      ))}
    </StudentLayout>
  );
}
