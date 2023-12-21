import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addContact, deleteContact, fetchContacts } from './operations';


// const contactInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase(addContact.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase(deleteContact.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(idx, 1);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  },
});

export const contactsReducer = contactsSlice.reducer;

