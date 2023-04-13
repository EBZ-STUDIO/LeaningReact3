import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PageRouter} from './DefaultRoute'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRouter>
      <App />
    </PageRouter>
  </React.StrictMode>
);