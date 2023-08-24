import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
    isFetchingCurrentUser: false,
    isRefreshing: false,
    isLoadingUser: false,
    errorUser: null,
  },
  extraReducers: {
    [signUp.pending](state) {
      state.isLoadingUser = true;
    },
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [signUp.rejected](state, action) {
      state.errorUser = action.payload;
      state.isLoadingUser = false;
    },
    //=======================================================================
    [logIn.pending](state) {
      state.isLoadingUser = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logIn.rejected](state, action) {
      state.errorUser = action.payload;
      state.isLoadingUser = false;
    },

    //==============================================================
    [logOut.pending](state) {
      state.isLoadingUser = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogged = false;
    },
    [logOut.rejected](state, action) {
      state.errorUser = action.payload;
      state.isLoadingUser = false;
    },
    //==============================================================
    [refreshUser.pending](state) {
      state.isLoadingUser = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
    [refreshUser.rejected](state, action) {
      state.errorUser = action.payload;
      state.isLoadingUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
