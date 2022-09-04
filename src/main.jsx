import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MaipoProvider } from './context/MaipoProvider';
import { FeriaVirtual } from './FeriaVirtual';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MaipoProvider>
      <BrowserRouter>
        <FeriaVirtual />
      </BrowserRouter>
    </MaipoProvider>
)
