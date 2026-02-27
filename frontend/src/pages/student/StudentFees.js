import React, { useEffect, useState } from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card, Button, Table, Badge } from "react-bootstrap";

export default function StudentFees() {
  const [payments, setPayments] = useState([]);

  // Simulated API call
  useEffect(() => {
    const fakePayments = [
      {
        id: 1,
        amount: 10000,
        date: "2026-01-15",
        status: "Completed",
        reference: "PAY12345",
      },
      {
        id: 2,
        amount: 10000,
        date: "2026-02-10",
        status: "Completed",
        reference: "PAY67890",
      },
    ];

    setPayments(fakePayments);
  }, []);

  const totalFees = 45000;
  const paidAmount = payments.reduce((sum, p) => sum + p.amount, 0);
  const outstanding = totalFees - paidAmount;

  return (
    <StudentLayout>
      <h3 className="page-title">💳 Fees & Payments</h3>
      <p className="page-subtitle">Track your payments and balance.</p>

      {/* Summary Card */}
      <Card className="student-card mb-3">
        <Card.Body>
          <p><b>Total Fees:</b> ₦{totalFees.toLocaleString()}</p>
          <p><b>Paid:</b> ₦{paidAmount.toLocaleString()}</p>
          <p className="text-danger">
            <b>Outstanding:</b> ₦{outstanding.toLocaleString()}
          </p>
        </Card.Body>
      </Card>

      <Button className="w-100 mb-4 pay-btn">
        Pay Now
      </Button>

      {/* Payment History */}
      <Card className="student-card">
        <Card.Body>
          <h5>Payment History</h5>

          <div className="table-responsive">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Reference</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.length > 0 ? (
                  payments.map((payment, index) => (
                    <tr key={payment.id}>
                      <td>{index + 1}</td>
                      <td>{payment.reference}</td>
                      <td>₦{payment.amount.toLocaleString()}</td>
                      <td>{payment.date}</td>
                      <td>
                        <Badge bg="success">
                          {payment.status}
                        </Badge>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No payment records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </StudentLayout>
  );
}