import React, { useState, useEffect } from 'react';
import axios from 'axios';

// NOTE: During development, the "proxy" setting in your package.json
// will automatically forward this request to your backend server.
const API_URL = '/api/jobs';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setJobs(data);
      } catch (err) {
        setError('Failed to fetch jobs.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  const pageStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const jobCardStyle = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div style={pageStyle}>
      <h1>Available Jobs</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} style={jobCardStyle}>
            <h3>{job.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#555' }}>{job.company}</p>
            <p style={{ color: '#777' }}>{job.location}</p>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
}

export default JobsPage;