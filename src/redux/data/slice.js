import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    passwordCheck: '',
    password: '',
    showPassword: false,
  },
  reducers: {
    setPasswordCheck(state, action) {
      state.passwordCheck = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setShowPassword(state, action) {
      state.showPassword = action.payload;
    },
  },
});

export const { setPasswordCheck, setPassword, setShowPassword } =
  dataSlice.actions;
export const dataReducer = dataSlice.reducer;
