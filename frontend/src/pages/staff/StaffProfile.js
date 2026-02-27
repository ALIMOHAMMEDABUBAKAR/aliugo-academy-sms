import React from "react";
import StaffLayout from "../../layout/StaffLayout";

export default function StaffProfile() {
  const staff = {
    name: "Staff User",
    email: "staff@aliugoacademy.com",
    role: "Staff",
  };

  return (
    <StaffLayout>
      <h2>My Profile</h2>

      <div className="dashboard-info">
        <p><strong>Name:</strong> {staff.name}</p>
        <p><strong>Email:</strong> {staff.email}</p>
        <p><strong>Role:</strong> {staff.role}</p>
      </div>
    </StaffLayout>
  );
}
