import React from "react";
import { Form, Alert } from "react-bootstrap";

export default function Step5Documents({ formData, updateField }) {
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

  const handleFileChange = (field, file) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type! Only PDF, JPG, and PNG are allowed.");
      return;
    }

    updateField(field, file);
  };

  const getRequiredDocs = () => {
    if (formData.level === "Nursery") {
      return ["passportPhoto", "birthCertificate", "immunizationCard"];
    }

    if (formData.level === "Primary") {
      return ["passportPhoto", "birthCertificate", "testimonial"];
    }

    if (formData.level === "Junior Secondary") {
      return ["passportPhoto", "birthCertificate", "testimonial", "transferCertificate"];
    }

    if (formData.level === "Senior Secondary") {
      return ["passportPhoto", "birthCertificate", "testimonial", "transferCertificate", "beceResult"];
    }

    return [];
  };

  const requiredDocs = getRequiredDocs();

  const docLabels = {
    passportPhoto: "Passport Photo *",
    birthCertificate: "Birth Certificate *",
    testimonial: "Testimonial",
    transferCertificate: "Transfer Certificate",
    beceResult: "BECE Result",
    immunizationCard: "Immunization Card",
  };

  return (
    <div>
      <h4 className="mb-3">Step 5: Upload Documents</h4>

      <Alert variant="info">
        Allowed file types: <strong>PDF, JPG, PNG</strong>
      </Alert>

      <Form>
        {requiredDocs.map((docKey) => (
          <Form.Group className="mb-3" key={docKey}>
            <Form.Label>{docLabels[docKey]}</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(docKey, e.target.files[0])}
            />

            {formData[docKey] && (
              <small className="text-success">
                Selected: {formData[docKey].name}
              </small>
            )}
          </Form.Group>
        ))}
      </Form>
    </div>
  );
}
