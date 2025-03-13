import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TierListProvider from './context/TierListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TierListProvider>
      <App />
    </TierListProvider>
  </React.StrictMode>
);
