
import React, { useState, useEffect } from 'react';

const AdminDoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('https://api.example.com/admin/doctors');
      const data = await response.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <div className="management">
      <h2>Doctor Management</h2>
   
      {doctors.length ? (
        <ul>
          {doctors.map(doctor => (
            <li key={doctor.id}>
              {doctor.name} ({doctor.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
};

export default AdminDoctorManagement;
