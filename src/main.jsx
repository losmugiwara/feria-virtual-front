import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MaipoProvider } from './context/MaipoProvider';
import { FeriaVirtual } from './FeriaVirtual';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MaipoProvider>
      <BrowserRouter>
        <FeriaVirtual />
      </BrowserRouter>
    </MaipoProvider>
  </Provider>
)
