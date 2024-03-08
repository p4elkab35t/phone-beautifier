import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import PhoneComponent from './phoneComponent';
import './phoneComponent.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneComponent />
  </React.StrictMode>
);

