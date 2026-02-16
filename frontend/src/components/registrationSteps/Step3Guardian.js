import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Step3Guardian({ formData, updateField }) {
  return (
    <div>
      <h4 className="mb-3">Step 3: Parent / Guardian Information</h4>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Guardian Full Name *</Form.Label>
              <Form.Control
                type="text"
                value={formData.guardianName}
                onChange={(e) => updateField("guardianName", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Relationship *</Form.Label>
              <Form.Select
                value={formData.guardianRelationship}
                onChange={(e) =>
                  updateField("guardianRelationship", e.target.value)
                }
              >
                <option value="">-- Select --</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
                <option value="Sponsor">Sponsor</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="text"
                value={formData.guardianPhone}
                onChange={(e) => updateField("guardianPhone", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Alternative Phone</Form.Label>
              <Form.Control
                type="text"
                value={formData.guardianAltPhone}
                onChange={(e) =>
                  updateField("guardianAltPhone", e.target.value)
                }
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                value={formData.guardianOccupation}
                onChange={(e) =>
                  updateField("guardianOccupation", e.target.value)
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Guardian Address</Form.Label>
          <Form.Control
            type="text"
            value={formData.guardianAddress}
            onChange={(e) => updateField("guardianAddress", e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
