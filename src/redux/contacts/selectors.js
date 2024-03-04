import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter.text;

export const selectAllContacts = state => state.contacts.items;
export const selectContactError = state => state.contacts.error;

export const selectVisibleContact = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    if (filter == '') return contacts;
    const options = {
      threshold: 0.3,
      keys: ['name', 'number'],
    };
    const fuse = new Fuse(contacts, options);
    const result = fuse.search(filter);

    return result.map(a => a.item);
  }
);
export const selectToast = state => state.contacts.toast;
