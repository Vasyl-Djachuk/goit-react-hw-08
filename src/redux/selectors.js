import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.text;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (contacts.length > 0) {
      return contacts.filter(
        contact =>
          contact.name
            .toLowerCase()
            .split(` `)
            .filter(n => n.startsWith(filter.toLowerCase())).length > 0
      );
    } else {
      return contacts;
    }
  }
);
