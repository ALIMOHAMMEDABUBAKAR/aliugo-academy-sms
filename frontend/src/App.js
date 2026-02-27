import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentResults from "./pages/student/StudentResults";
import StudentFees from "./pages/student/StudentFees";
import StudentDocuments from "./pages/student/StudentDocuments";
import StudentMessages from "./pages/student/StudentMessages";
import StudentSettings from "./pages/student/StudentSettings";

import StaffDashboard from "./pages/staff/StaffDashboard";
import StaffStudents from "./pages/staff/StaffStudents";
import StaffAttendance from "./pages/staff/StaffAttendance";
import StaffResults from "./pages/staff/StaffResults";
import StaffProfile from "./pages/staff/StaffProfile";
import StaffMessage from "./pages/staff/StaffMessages";

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import RegisterStudent from "./pages/RegisterStudent";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* STAFF DASHBOARD */}
        <Route
          path="/staff"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/students"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/messages"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffMessage />
            </ProtectedRoute>
          }
        />    

        <Route
          path="/staff/attendance"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffAttendance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/results"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffResults />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/profile"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffProfile />
            </ProtectedRoute>
          }
        />


        {/* STUDENT DASHBOARD */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/profile"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/results"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentResults />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/fees"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentFees />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/documents"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDocuments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/settings"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentSettings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
