import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Step2Bio({ formData, updateField }) {
  return (
    <div>
      <h4 className="mb-3">Step 2: Student Bio Data</h4>

      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Surname *</Form.Label>
              <Form.Control
                type="text"
                value={formData.surname}
                onChange={(e) => updateField("surname", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                value={formData.firstname}
                onChange={(e) => updateField("firstname", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Other Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.othername}
                onChange={(e) => updateField("othername", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Gender *</Form.Label>
              <Form.Select
                value={formData.gender}
                onChange={(e) => updateField("gender", e.target.value)}
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control
                type="date"
                value={formData.dob}
                onChange={(e) => updateField("dob", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                type="text"
                value={formData.nationality}
                onChange={(e) => updateField("nationality", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        
{formData.level === "Senior Secondary" && (
  <Row>
    <Col md={6}>
      <Form.Group className="mb-3">
        <Form.Label>NIN (SSS Students Only) *</Form.Label>
        <Form.Control
          type="text"
          maxLength={11}
          placeholder="Enter 11-digit NIN"
          value={formData.nin}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, "");
            updateField("nin", onlyNumbers);
          }}
        />
        <Form.Text className="text-muted">
          Must be exactly 11 digits.
        </Form.Text>
      </Form.Group>
    </Col>
  </Row>
)}

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>State *</Form.Label>
              <Form.Control
                type="text"
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>LGA *</Form.Label>
              <Form.Control
                type="text"
                value={formData.lga}
                onChange={(e) => updateField("lga", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Home Address *</Form.Label>
              <Form.Control
                type="text"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
