import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OpenedFilesProvider } from './context/OpenedFilesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OpenedFilesProvider>
    <App />
  </OpenedFilesProvider>
);
