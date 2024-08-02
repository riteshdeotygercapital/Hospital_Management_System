
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignUpPage';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminPatientManagement from './components/Dashboard/AdminPatientManagement';
import AdminDoctorManagement from './components/Dashboard/AdminDoctorManagement';

import './App.css';

const App = () => {
  return (
    <Router>
        <Navbar />
        <div className="main-content">
        <Routes>
          <Route path="/patient-login" element={<LoginPage role="patient" />} />
          <Route path="/admin-login" element={<LoginPage role="admin" />} />
          <Route path="/doctor-login" element={<LoginPage role="doctor" />} />
          <Route path="/patient-signup" element={<SignupPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-patient-management" element={<AdminPatientManagement />} />
          <Route path="/admin-doctor-management" element={<AdminDoctorManagement />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;




