
import React, { useState, useEffect } from 'react';

const AdminPatientManagement = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('https://api.example.com/admin/patients');
      const data = await response.json();
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div className="management">
      <h2>Patient Management</h2>
    
      {patients.length ? (
        <ul>
          {patients.map(patient => (
            <li key={patient.id}>
              {patient.name} ({patient.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
};

export default AdminPatientManagement;
