import React, { useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { Form, Button, Alert } from "react-bootstrap";

export default function StaffMessages() {
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) {
      setMsg("Message cannot be empty.");
      return;
    }

    setMsg("Message sent successfully (demo).");
    setMessage("");
  };

  return (
    <StaffLayout>
      <h2>Send Message</h2>

      {msg && <Alert variant="success">{msg}</Alert>}

      <Form onSubmit={sendMessage}>
        <Form.Group className="mb-3">
          <Form.Label>Message to Students</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Send</Button>
      </Form>
    </StaffLayout>
  );
}
