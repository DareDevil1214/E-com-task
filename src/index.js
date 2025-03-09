import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';  // Changed from index.css to App.css since you have App.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);