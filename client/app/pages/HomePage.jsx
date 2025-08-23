import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const pageStyle = {
    textAlign: 'center',
    padding: '50px 20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '12px 25px',
    fontSize: '1em',
    color: 'white',
    backgroundColor: '#007BFF',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  return (
    <div style={pageStyle}>
      <h1>Welcome to JobPortal</h1>
      <p>Your one-stop destination to find your dream job or the perfect candidate.</p>
      <div>
        <Link to="/jobs" style={buttonStyle}>
          Browse All Jobs
        </Link>
        <Link to="/post-job" style={buttonStyle}>
          Post a New Job
        </Link>
      </div>
    </div>
  );
}

export default HomePage;