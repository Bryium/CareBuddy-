import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from ".pages/Login";
import Register from "./pages/Register";

import PatientDashboard from "./pages/dashboards/PatientDashboard";
import DoctorDashboard from "./pages/dashboards/DoctorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import PatientAppointments from "./pages/appointments/PatientAppointments";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* patient */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute role="patient">
              <PatientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <PrivateRoute role="patient">
              <PatientAppointments />
            </PrivateRoute>
          }
        />

        {/* doctor */}
        <Route
          path="/doctor"
          element={
            <PrivateRoute role="doctor">
              <DoctorDashboard />
            </PrivateRoute>
          }
        />

        {/* admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
