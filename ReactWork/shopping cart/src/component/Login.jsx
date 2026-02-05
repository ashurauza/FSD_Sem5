import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(users);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    
    const user = registeredUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      setError('Invalid email or password. Please register first.');
      return;
    }

    setError(null);
    console.log('Login successful', { email, password });
    alert(`Welcome back, ${user.name}!`);
    setEmail('');
    setPassword('');
  
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 420 }}>
      <div className="card p-4 shadow-sm">
        <h2 className="mb-3" style={{ backgroundColor: 'lightblue', padding: 6 }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login-email" className="form-label">Email</label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <div className="alert alert-danger py-1">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}