import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OpenedFilesProvider } from './context/OpenedFilesProvider';
import { PcConfigsProvider } from './context/PcConfigsProvider';
import { UserPopupProvider } from './context/UserPopupProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OpenedFilesProvider>
    <UserPopupProvider>
      <PcConfigsProvider>
        <App />
      </PcConfigsProvider>
    </UserPopupProvider>
  </OpenedFilesProvider>
);
