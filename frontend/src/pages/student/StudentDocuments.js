import React, { useEffect, useState } from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card, Button, ListGroup } from "react-bootstrap";

export default function StudentDocuments() {
  const [documents, setDocuments] = useState([]);

  // Simulated API call
  useEffect(() => {
    const fakeDocuments = [
      {
        id: 1,
        name: "Admission Letter",
        file_url: "/docs/admission_letter.pdf",
      },
      {
        id: 2,
        name: "Student ID Card",
        file_url: "/docs/id_card.pdf",
      },
      {
        id: 3,
        name: "Result Slip",
        file_url: "/docs/result_slip.pdf",
      },
    ];

    setDocuments(fakeDocuments);
  }, []);

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <StudentLayout>
      <h3 className="page-title">📄 My Documents</h3>
      <p className="page-subtitle">
        Download your available documents.
      </p>

      <Card className="student-card">
        <ListGroup variant="flush">
          {documents.length > 0 ? (
            documents.map((doc) => (
              <ListGroup.Item
                key={doc.id}
                className="d-flex justify-content-between align-items-center"
              >
                <span>📄 {doc.name}</span>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => handleDownload(doc.file_url)}
                >
                  Download
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center">
              No documents available.
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </StudentLayout>
  );
}