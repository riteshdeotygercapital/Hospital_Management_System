// src/components/PatientTable.js
import React, { useEffect } from 'react';
import $ from 'jquery';
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net'; 

const PatientTable = () => {
  useEffect(() => {
    // Initialize DataTable
    $('#patientTable').DataTable({
      ajax: {
        url: 'https://api.example.com/patients', 
        dataSrc: '',
      },
      columns: [
        { title: 'Name', data: 'name' },
        { title: 'Email', data: 'email' },
        { title: 'ID', data: 'id' },
        { title: 'Illness', data: 'illness' },
      ],
      paging: true, 
      searching: true, 
      ordering: true, 
    });

    
    return () => {
      $('#patientTable').DataTable().destroy(true);
    };
  }, []);

  return (
    <div className="table-container">
      <table id="patientTable" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Illness</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default PatientTable;
