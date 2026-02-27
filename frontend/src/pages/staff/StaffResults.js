import React, { useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { Form, Button, Alert } from "react-bootstrap";

export default function StaffResults() {
  const [formData, setFormData] = useState({
    student: "",
    subject: "",
    score: "",
  });

  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.student || !formData.subject || !formData.score) {
      setMsg("Please fill all fields.");
      return;
    }

    setMsg("Result uploaded successfully (demo).");
    setFormData({ student: "", subject: "", score: "" });
  };

  return (
    <StaffLayout>
      <h2>Upload Results</h2>

      {msg && <Alert variant="info">{msg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Student Admission No</Form.Label>
          <Form.Control
            type="text"
            value={formData.student}
            onChange={(e) =>
              setFormData({ ...formData, student: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Score</Form.Label>
          <Form.Control
            type="number"
            value={formData.score}
            onChange={(e) =>
              setFormData({ ...formData, score: e.target.value })
            }
          />
        </Form.Group>

        <Button type="submit">Submit Result</Button>
      </Form>
    </StaffLayout>
  );
}
