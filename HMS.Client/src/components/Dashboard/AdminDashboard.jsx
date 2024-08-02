
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const handleLogout = () => {
  
    window.location.href = '/admin-signin';
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        <ul>
          <li><button onClick={handleLogout}>Logout</button></li>
          <li><Link to="/admin-patient-management">Patient Management</Link></li>
          <li><Link to="/admin-doctor-management">Doctor Management</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the Admin Dashboard.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
