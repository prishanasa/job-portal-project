import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // We will create this App.jsx file in the very next step
import './styles/index.css'; // We will create this styling file later

// This finds the 'root' div in the main HTML file and renders our React app into it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
