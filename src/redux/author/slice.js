import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(register.rejected, handleRejected)
      // .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(logIn.rejected, handleRejected)
      // .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        // state.isRefreshing = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
