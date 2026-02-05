import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function validate() {
    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill out all fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  }

  
  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess('');
    if (!validate()) return;

    // Optionally, you can keep the localStorage logic or replace it with the API call below

    // API call to register user
    try {
      const response = await fetch("http://172.16.40.156:5656/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setSuccess(result.message || `Welcome, ${name}! Registration successful. You can now login.`);
        setName('');
        setEmail('');
        setPassword('');
        setError('');
      } else {
        setError(result.message || 'Registration failed.');
        setSuccess('');
      }
    } catch {
      setError('An error occurred during registration.');
      setSuccess('');
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 560 }}>
      <div>
        <div
          className="p-4 text-center"
          style={{
            background:
              'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.12), transparent 20%), linear-gradient(90deg,#6c8cff,#9ad0ff)',
            color: 'white',
          }}
        >
          <h2 className="mb-1">Create Account</h2>
          <small className="d-block opacity-85">Join us — it's quick and easy</small>
        </div>

        <div className="p-4">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="reg-name" className="form-label">Name</label>
              <input
                id="reg-name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="reg-email" className="form-label">Email</label>
              <input
                id="reg-email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="reg-password" className="form-label">Password</label>
              <input
                id="reg-password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
              />
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}
            {success && <div className="alert alert-success py-2">{success}</div>}

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <small className="text-muted">By registering you agree to our terms.</small>
            </div>
          </form>
        </div>

        <div className="p-3 text-center" style={{ background: '#fafafa' }}>
          <small className="text-muted">Already have an account? Sign in</small>
        </div>
      </div>
    </div>
  );
}