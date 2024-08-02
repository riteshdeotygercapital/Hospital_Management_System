// src/components/DoctorDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DoctorTable from './DoctorTable';
const DoctorDashboard = () => {
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {

    const fetchDoctorDetails = async () => {
      const response = await fetch('https://api.example.com/doctor/details');
      const data = await response.json();
      setDoctorData(data);
    };
    fetchDoctorDetails();
  }, []);

  const handleLogout = () => {
    
    window.location.href = '/doctor-signin';
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        <ul>
          <li><button onClick={handleLogout}>Logout</button></li>
          <li><Link to="/doctor-details">Doctor Details</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h2>Doctor Dashboard</h2>
        {doctorData ? (
          <div>
            <h3>Patient Details</h3>
            <p>Name: {doctorData.name}</p>
            <p>Email: {doctorData.email}</p>
            <p>ID: {doctorData.id}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
