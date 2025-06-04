import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://192.168.1.67:3001/api/users";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API_URL);
  return response.data.users; 
});

export const addUser = createAsyncThunk('users/addUser', async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data.user; 
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await axios.delete(`${API_URL}/${userId}`);
  return userId;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter(user => user._id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
