import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MaipoProvider } from './context/MaipoProvider';
import { FeriaVirtual } from './FeriaVirtual';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SnackbarProvider } from 'notistack';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MaipoProvider>
        <BrowserRouter>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}>
            <FeriaVirtual />
          </SnackbarProvider>
        </BrowserRouter>
      </MaipoProvider>
    </PersistGate>
  </Provider>
)
