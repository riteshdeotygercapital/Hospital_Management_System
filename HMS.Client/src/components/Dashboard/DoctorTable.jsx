// src/components/DoctorTable.js
import React, { useEffect } from 'react';
import $ from 'jquery';
// import 'datatables.net-dt/css/jquery.dataTables.min.css'; 
import 'datatables.net'; 

const DoctorTable = () => {
  useEffect(() => {
   
    $('#doctorTable').DataTable({
      ajax: {
        url: 'https://api.example.com/doctors',
        dataSrc: ''
      },
      columns: [
        { title: 'Name', data: 'name' },
        { title: 'Email', data: 'email' },
        { title: 'ID', data: 'id' },
        { title: 'Illness', data: 'illness' }
      ]
    });
  }, []);

  return (
    <div className="table-container">
      <table id="doctorTable" className="display">
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

export default DoctorTable;
