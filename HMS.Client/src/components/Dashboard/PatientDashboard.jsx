
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PatientTable from './PatientTable';
const PatientDashboard = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {

    const fetchPatientDetails = async () => {
      const response = await fetch('https://api.example.com/patient/details');
      const data = await response.json();
      setPatientData(data);
    };
    fetchPatientDetails();
  }, []);

  const handleLogout = () => {
    
    window.location.href = '/patient-signin';
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        <ul>
          <li><button onClick={handleLogout}>Logout</button></li>
          <li><Link to="/patient-details">Patient Details</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h2>Patient Dashboard</h2>
        {patientData ? (
          <div>
            <h3>Patient Details</h3>
            <p>Name: {patientData.name}</p>
            <p>Email: {patientData.email}</p>
            <p>ID: {patientData.id}</p>
            <p>Illness: {patientData.illness}</p>
            <p>DoctorAssigned: {patientData.doctorassigned}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
