import { configureStore } from '@reduxjs/toolkit';
import { authSlice, cartSlice } from './auth';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const reducer = combineReducers({
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
});

const peristedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: peristedReducer,
});