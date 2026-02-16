import React from "react";
import { Table, Button, Alert } from "react-bootstrap";

export default function Step6ReviewSubmit({ formData, admissionNumberPreview }) {
  const handleSubmit = () => {
    alert("Form is ready! Next Phase: connect API submission.");
  };

  return (
    <div>
      <h4 className="mb-3">Step 6: Review & Submit</h4>

      <Alert variant="success">
        Please confirm all details before submitting registration.
      </Alert>

      <h5 className="mt-3">Admission Details</h5>
      <Table bordered responsive>
        <tbody>
          <tr>
            <td><strong>Admission Number</strong></td>
            <td>{admissionNumberPreview}</td>
          </tr>
          <tr>
            <td><strong>Level</strong></td>
            <td>{formData.level}</td>
          </tr>
          <tr>
            <td><strong>Admission Year</strong></td>
            <td>{formData.year}</td>
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">Student Bio Data</h5>
      <Table bordered responsive>
        <tbody>
          <tr>
            <td><strong>Full Name</strong></td>
            <td>
              {formData.surname} {formData.firstname} {formData.othername}
            </td>
          </tr>
          <tr>
            <td><strong>Gender</strong></td>
            <td>{formData.gender}</td>
          </tr>
          <tr>
            <td><strong>Date of Birth</strong></td>
            <td>{formData.dob}</td>
          </tr>
          <tr>
            <td><strong>Nationality</strong></td>
            <td>{formData.nationality}</td>
          </tr>
          <tr>
            <td><strong>State</strong></td>
            <td>{formData.state}</td>
          </tr>
          <tr>
            <td><strong>LGA</strong></td>
            <td>{formData.lga}</td>
          </tr>
          <tr>
            <td><strong>Address</strong></td>
            <td>{formData.address}</td>
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">Guardian Info</h5>
      <Table bordered responsive>
        <tbody>
          <tr>
            <td><strong>Guardian Name</strong></td>
            <td>{formData.guardianName}</td>
          </tr>
          <tr>
            <td><strong>Relationship</strong></td>
            <td>{formData.guardianRelationship}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>{formData.guardianPhone}</td>
          </tr>
          <tr>
            <td><strong>Alt Phone</strong></td>
            <td>{formData.guardianAltPhone}</td>
          </tr>
          <tr>
            <td><strong>Occupation</strong></td>
            <td>{formData.guardianOccupation}</td>
          </tr>
          <tr>
            <td><strong>Guardian Address</strong></td>
            <td>{formData.guardianAddress}</td>
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">Academic Info</h5>
      <Table bordered responsive>
        <tbody>
          <tr>
            <td><strong>Class Applying For</strong></td>
            <td>{formData.classApplying}</td>
          </tr>
          <tr>
            <td><strong>Department</strong></td>
            <td>{formData.department || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Previous School</strong></td>
            <td>{formData.previousSchool || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Last Class Completed</strong></td>
            <td>{formData.lastClassCompleted || "N/A"}</td>
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">Uploaded Documents</h5>
      <Table bordered responsive>
        <tbody>
          <tr>
            <td><strong>Passport Photo</strong></td>
            <td>{formData.passportPhoto ? formData.passportPhoto.name : "Not uploaded"}</td>
          </tr>
          <tr>
            <td><strong>Birth Certificate</strong></td>
            <td>{formData.birthCertificate ? formData.birthCertificate.name : "Not uploaded"}</td>
          </tr>
          <tr>
            <td><strong>Testimonial</strong></td>
            <td>{formData.testimonial ? formData.testimonial.name : "Not uploaded"}</td>
          </tr>
          <tr>
            <td><strong>Transfer Certificate</strong></td>
            <td>{formData.transferCertificate ? formData.transferCertificate.name : "Not uploaded"}</td>
          </tr>
          <tr>
            <td><strong>BECE Result</strong></td>
            <td>{formData.beceResult ? formData.beceResult.name : "Not uploaded"}</td>
          </tr>
          <tr>
            <td><strong>Immunization Card</strong></td>
            <td>{formData.immunizationCard ? formData.immunizationCard.name : "Not uploaded"}</td>
          </tr>
        </tbody>
      </Table>

      <div className="text-center mt-4">
        <Button variant="success" size="lg" onClick={handleSubmit}>
          Submit Registration
        </Button>
      </div>
    </div>
  );
}
