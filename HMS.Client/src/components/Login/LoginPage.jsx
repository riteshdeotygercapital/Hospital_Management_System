import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
const LoginPage = ({ role }) => {
  const [id, setId] = useState('');
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://yourapi.com/${role}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, password }),
    });
    const data = await response.json();
    console.log(data);
  };

    return (
      <div className='Contain'>
      <div>
        <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h1>
        <form onSubmit={handleSubmit}>
          {role === 'patient' && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />}
          {role === 'doctor' && <input type="text" placeholder="Name" value={name1} onChange={(e) => setName1(e.target.value)} required />}
          {role === 'admin' && <input type="text" placeholder="Name" value={name2} onChange={(e) => setName2(e.target.value)} required />}
          {role === 'patient' && <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />}
          {role === 'doctor' && <input type="text" placeholder="ID" value={id1} onChange={(e) => setId1(e.target.value)} required />}
          {role === 'admin' && <input type="text" placeholder="ID" value={id2} onChange={(e) => setId2(e.target.value)} required />}
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

