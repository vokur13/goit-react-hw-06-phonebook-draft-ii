import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
