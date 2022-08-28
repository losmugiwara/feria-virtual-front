import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UseProvider } from './context/useProvider';
import { FeriaVirtual } from './FeriaVirtual';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UseProvider>
      <BrowserRouter>
        <FeriaVirtual />
      </BrowserRouter>
    </UseProvider>
  </React.StrictMode>

)
