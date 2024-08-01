import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/patient-login">Patient Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/doctor-login">Doctor Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
