import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      // return state.contacts.filter(item => item.id !== action.payload);
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    findFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, findFilter } = contactsSlice.actions;
