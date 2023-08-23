import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `${token}`;
};

//const clearAuthHeader = () => {
//  axios.defaults.headers.common['Authorization'] = '';
//};

export const signUp = createAsyncThunk(
  'auth/singin',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', user);
      setAuthHeader(res.data.token);
      console.log('token:', res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', user);
    setAuthHeader(res.data.token);
    console.log('token:', res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout');
    console.log('token:', res.data.token);
    //return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
