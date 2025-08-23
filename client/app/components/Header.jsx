import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#333',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          JobPortal
        </Link>
        <Link to="/jobs" style={linkStyle}>
          All Jobs
        </Link>
        <Link to="/post-job" style={linkStyle}>
          Post a Job
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;