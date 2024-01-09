import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import useReducer from './user/userSlice.js';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({user : useReducer});

const persistConfig = {
    key:'root',
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);