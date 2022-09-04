import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UseProvider } from './context/useProvider';
import { FeriaVirtual } from './FeriaVirtual';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UseProvider>
      <BrowserRouter>
        <FeriaVirtual />
      </BrowserRouter>
    </UseProvider>
)
