import { selectAllContacts } from '../contacts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectDelModal = state => state.modal.delete;

export const selectEditModal = state => state.modal.edit;

export const selectModalID = state => state.modal.id;

export const selectAddModal = state => state.modal.addIsOpen;

export const selectModalContact = createSelector(
  [selectAllContacts, selectModalID],
  (contacts, id) => {
    const result = contacts.filter(contact => contact.id === id);
    return result[0];
  }
);
