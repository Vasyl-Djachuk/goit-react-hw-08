import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    passwordCheck: '',
    password: '',
  },
  reducers: {
    setPasswordCheck(state, action) {
      state.passwordCheck = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setPasswordCheck, setPassword } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
