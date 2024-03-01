import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    delete: false,
    edit: false,
    id: '',
  },
  reducers: {
    setDeleteModal(state, action) {
      state.delete = action.payload;
    },
    setModalId(state, action) {
      state.id = action.payload;
    },
    setEditModal(state, action) {
      state.edit = action.payload;
    },
  },
});

export const { setDeleteModal, setModalId, setEditModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
