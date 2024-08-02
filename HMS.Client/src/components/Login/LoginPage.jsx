import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
const LoginPage = ({ role }) => {
  const [username, setusername] = useState('');
  const [username1, setusername1] = useState('');
  const [username2, setusername2] = useState('');
  const [id, setId] = useState('');
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://yourapi.com/${role}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, username, password }),
    });
    const data = await response.json();
    console.log(data);
  };

    return (
      <div className='Contain'>
      <div>
        <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h1>
        <form onSubmit={handleSubmit}>
          {role === 'patient' && <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />}
          {role === 'doctor' && <input type="text" placeholder="ID" value={id1} onChange={(e) => setId1(e.target.value)} required />}
          {role === 'admin' && <input type="text" placeholder="ID" value={id2} onChange={(e) => setId2(e.target.value)} required />}
          {role === 'patient' && <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} required />}
          {role === 'doctor' && <input type="text" placeholder="Username" value={username1} onChange={(e) => setusername1(e.target.value)} required />}
          {role === 'admin' && <input type="text" placeholder="Username" value={username2} onChange={(e) => setusername2(e.target.value)} required />}
          {role === 'patient' && <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />}
          {role === 'doctor' && <input type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} required />}
          {role === 'admin' && <input type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />}


          <button type="submit">Login</button>
        </form>
        {role === 'patient' && <p><Link to="/patient-signup">Sign Up</Link></p>}
      </div>
      </div>
    );
  };

export default LoginPage;

