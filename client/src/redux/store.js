import {configureStore} from '@reduxjs/toolkit';
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import useReducer from './user/userSlice.js';

export const store = configureStore({
    reducer: {user : useReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});