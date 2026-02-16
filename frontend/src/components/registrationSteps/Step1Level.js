import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Step1Level({ formData, updateField }) {
  return (
    <div>
      <h4 className="mb-3">Step 1: Admission Level</h4>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Education Level *</Form.Label>
              <Form.Select
                value={formData.level}
                onChange={(e) => updateField("level", e.target.value)}
              >
                <option value="">-- Select Level --</option>
                <option value="Nursery">Nursery School</option>
                <option value="Primary">Primary School</option>
                <option value="Junior Secondary">Junior Secondary School (JSS)</option>
                <option value="Senior Secondary">Senior Secondary School (SSS)</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Admission Year *</Form.Label>
              <Form.Control
                type="number"
                value={formData.year}
                onChange={(e) => updateField("year", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
