import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для керування станом контактів
    filter: filterReducer, // Редюсер для керування станом фільтра
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
