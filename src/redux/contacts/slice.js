import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
