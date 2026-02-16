import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import EditStudent from "./pages/EditStudent";
import NotFound from "./pages/NotFound";
import RegisterStudent from "./pages/RegisterStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
