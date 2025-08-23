import React, { useState } from 'react';
import axios from 'axios';

const API_URL = '/api/jobs';

function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    jobType: 'Full-time',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { title, company, location, description, salary, jobType } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // In a real app, you would get this from your state management (e.g., Redux, Context)
    // or from localStorage after the user logs in.
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo || !userInfo.token) {
      setError('You must be logged in to post a job.');
      setLoading(false);
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      await axios.post(API_URL, formData, config);
      alert('Job posted successfully!');
      // Clear form
      setFormData({
        title: '', company: '', location: '', description: '', salary: '', jobType: 'Full-time',
      });
    } catch (err) {
      setError('Failed to post job. Please try again.');
      console.error('Post job failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const formStyle = {
    display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '0 auto',
    padding: '20px', border: '1px solid #ccc', borderRadius: '8px',
  };
  const inputStyle = { marginBottom: '10px', padding: '10px', fontSize: '1em' };
  const buttonStyle = {
    padding: '10px', fontSize: '1em', backgroundColor: '#007BFF',
    color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',
  };

  return (
    <div>
      <form style={formStyle} onSubmit={submitHandler}>
        <h1>Post a New Job</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <input type="text" name="title" placeholder="Job Title" value={title} onChange={onChange} style={inputStyle} required />
        <input type="text" name="company" placeholder="Company Name" value={company} onChange={onChange} style={inputStyle} required />
        <input type="text" name="location" placeholder="Location (e.g., City, State)" value={location} onChange={onChange} style={inputStyle} required />
        <textarea name="description" placeholder="Job Description" value={description} onChange={onChange} style={{ ...inputStyle, minHeight: '100px' }} required />
        <input type="number" name="salary" placeholder="Salary (Optional)" value={salary} onChange={onChange} style={inputStyle} />
        
        <select name="jobType" value={jobType} onChange={onChange} style={inputStyle}>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </div>
  );
}

export default PostJobPage;