import "tailwindcss";
import './App.css';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function scrollToTopOnLoad() {
  window.scrollTo(0, 0);
  window.history.replaceState(null, '', window.location.pathname);
}

// Run after everything loads
window.addEventListener('load', scrollToTopOnLoad);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
