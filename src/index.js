import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InventoryProvider } from './context/inventoryContext';

ReactDOM.render(
  <React.StrictMode>
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
