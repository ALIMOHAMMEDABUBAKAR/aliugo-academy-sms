import React, { useState } from "react";
import StudentLayout from "../../layout/StudentLayout";
import { Card, Form, Button, Alert } from "react-bootstrap";

export default function StudentSettings() {
  const [profileData, setProfileData] = useState({
    phone: "",
    email: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    if (!profileData.phone || !profileData.email) {
      setMessage("Please fill all profile fields.");
      return;
    }

    setMessage("Profile updated successfully (demo).");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (
      !passwordData.oldPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setMessage("All password fields are required.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    setMessage("Password changed successfully (demo).");

    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <StudentLayout>
      <h3 className="page-title">Settings</h3>

      {message && <Alert variant="info">{message}</Alert>}

      {/* Update Profile Section */}
      <Card className="student-card mb-4">
        <Card.Body>
          <h5 className="mb-3">Update Profile</h5>

          <Form onSubmit={handleProfileUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={profileData.phone}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Change Password Section */}
      <Card className="student-card">
        <Card.Body>
          <h5 className="mb-3">Change Password</h5>

          <Form onSubmit={handlePasswordChange}>
            <Form.Group className="mb-3">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.oldPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    oldPassword: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button type="submit" variant="warning">
              Change Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </StudentLayout>
  );
}