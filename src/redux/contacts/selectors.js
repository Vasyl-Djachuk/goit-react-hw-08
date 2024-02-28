import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.filter.text;

export const selectAllContacts = state => state.contacts.items;

export const selectVisibleContact = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    // console.log(filter);
    if (filter == '') return contacts;
    const options = {
      threshold: 0.3,
      // includeScore: true,
      // Search in `author` and in `tags` array
      keys: ['name', 'number'],
    };
    // console.log(contacts);
    const fuse = new Fuse(contacts, options);
    const result = fuse.search(filter);
    // console.log(result.map(a => a.item));
    return result.map(a => a.item);
    //   if (contacts.length > 0) {
    //     return contacts.filter(
    //       contact =>
    //         contact.name
    //           .toLowerCase()
    //           .split(` `)
    //           .filter(n => n.startsWith(filter.toLowerCase())).length > 0
    //     );
    //   } else {
    //     return contacts;
    //   }
  }
);
