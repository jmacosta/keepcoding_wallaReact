import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { setAuthorizationHeader } from './api/client.js';
import './index.css';
import storage from './utils/storage.js';
const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App iniatiallyLogged={!!accessToken} />
    </BrowserRouter>
  </React.StrictMode>
);
