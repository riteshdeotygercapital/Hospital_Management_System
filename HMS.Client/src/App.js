
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignUpPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/patient-login" element={<LoginPage role="patient" />} />
          <Route path="/admin-login" element={<LoginPage role="admin" />} />
          <Route path="/doctor-login" element={<LoginPage role="doctor" />} />
          <Route path="/patient-signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
