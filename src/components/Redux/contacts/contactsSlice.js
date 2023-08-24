import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    //============================================

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.unshift(action.payload);
      state.isLoading = false;
    },

    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    //========================================

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },

    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    //=========================================

    [updateContact.pending](state) {
      state.isLoading = true;
    },
    [updateContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.items.unshift(action.payload);
      state.isLoading = false;
    },

    [updateContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
