import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Will be created soon
import HomePage from './pages/HomePage'; // Will be created soon
import JobsPage from './pages/JobsPage'; // Will be created soon
import LoginPage from './pages/LoginPage'; // Will be created soon
import RegisterPage from './pages/RegisterPage'; // Will be created soon
import PostJobPage from './pages/PostJobPage'; // Will be created soon

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/login" element-={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post-job" element={<PostJobPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;