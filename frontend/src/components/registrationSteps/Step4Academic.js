import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Step4Academic({ formData, updateField }) {
  const getClassOptions = () => {
    if (formData.level === "Nursery") {
      return ["Nursery 1", "Nursery 2", "Nursery 3"];
    }

    if (formData.level === "Primary") {
      return ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"];
    }

    if (formData.level === "Junior Secondary") {
      return ["JSS 1", "JSS 2", "JSS 3"];
    }

    if (formData.level === "Senior Secondary") {
      return ["SSS 1", "SSS 2", "SSS 3"];
    }

    return [];
  };

  return (
    <div>
      <h4 className="mb-3">Step 4: Academic Information</h4>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Class Applying For *</Form.Label>
              <Form.Select
                value={formData.classApplying}
                onChange={(e) => updateField("classApplying", e.target.value)}
              >
                <option value="">-- Select Class --</option>
                {getClassOptions().map((cls, index) => (
                  <option key={index} value={cls}>
                    {cls}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          {(formData.level === "Junior Secondary" ||
            formData.level === "Senior Secondary") && (
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Department *</Form.Label>
                <Form.Select
                  value={formData.department}
                  onChange={(e) => updateField("department", e.target.value)}
                >
                  <option value="">-- Select Department --</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commercial">Commercial</option>
                </Form.Select>
              </Form.Group>
            </Col>
          )}
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Previous School</Form.Label>
              <Form.Control
                type="text"
                value={formData.previousSchool}
                onChange={(e) => updateField("previousSchool", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Class Completed</Form.Label>
              <Form.Control
                type="text"
                value={formData.lastClassCompleted}
                onChange={(e) =>
                  updateField("lastClassCompleted", e.target.value)
                }
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
