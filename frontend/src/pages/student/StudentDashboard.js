import React from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card, Row, Col } from "react-bootstrap";

export default function StudentDashboard() {
  return (
    <StudentLayout>
      <h3 className="page-title">Welcome Student 👋</h3>
      <p className="page-subtitle">
        This is your dashboard. You can check your profile, results, attendance, and messages.
      </p>

      <Row className="g-3">
  
        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>TERM</Card.Title>
              <Card.Text>Second Term</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>My Class</Card.Title>
              <Card.Text>SS2 B</Card.Text>
            </Card.Body>
          </Card>
        </Col>
 
        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>Adnission No.</Card.Title>
              <Card.Text>AA/2026/SSS/0646</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>📑 Results</Card.Title>
              <Card.Text>Check your term results anytime.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>📅 Attendance</Card.Title>
              <Card.Text>View your attendance record.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="student-card">
            <Card.Body>
              <Card.Title>💬 Messages</Card.Title>
              <Card.Text>Read announcements from staff.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="student-info-box">
        <h5>📌 Quick Notice</h5>
        <p>
          Always check your results and attendance regularly. If you find any issue,
          contact your class teacher immediately.
        </p>
      </div>
    </StudentLayout>
  );
}
