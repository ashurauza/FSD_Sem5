
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainLayout() {
  const wrapper = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
    background: 'linear-gradient(180deg, #f7f9fc 0%, #eef6ff 100%)'
  }

  const card = {
    width: '100%',
    maxWidth: 420,
    borderRadius: 12,
    background: 'linear-gradient(135deg,#6b3d00 0%, #b06500 100%)',
    color: '#fff',
    boxShadow: '0 10px 30px rgba(11,11,11,0.18)',
    padding: 28,
    boxSizing: 'border-box'
  }

  const nav = {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 18
  }

  return (
    <div style={wrapper}>
      <div style={card} role="navigation" aria-label="main navigation">
        <nav style={nav}>
          <Link to="/login" className="ml-link">Login</Link>
          <Link to="/register" className="ml-link">Register</Link>
        </nav>

        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <h3 style={{ margin: 0, fontWeight: 600 }}>Welcome</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.9 }}>
            Access your account or create a new one.
          </p>
        </div>

        <style>{`
          .ml-link{
            display:inline-block;
            padding:10px 18px;
            border-radius:8px;
            color:#fff;
            text-decoration:none;
            font-weight:600;
            background: rgba(255,255,255,0.08);
            transition: transform .12s ease, background .12s ease, box-shadow .12s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          .ml-link:hover{
            transform: translateY(-3px);
            background: rgba(255,255,255,0.14);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          }
          .ml-link:active{ transform: translateY(0); }
          @media (max-width: 520px){
            .ml-link{ padding: 9px 12px; font-size:14px; }
          }
        `}</style>
      </div>
    </div>
  )
}
