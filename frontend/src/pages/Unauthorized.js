import React from "react";
import { Container, Alert } from "react-bootstrap";

export default function Unauthorized() {
  return (
    <Container className="py-5">
      <Alert variant="danger">
        <h4>Unauthorized Access</h4>
        <p>You do not have permission to access this page.</p>
      </Alert>
    </Container>
  );
}
