import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  status: 'idle',
  error: null,
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setListNews: (state, action) => {
      state.news = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    setLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setStatusSucceeded: (state) => {
      state.status = 'succeeded';
    },
    setStatusFailed: (state) => {
      state.status = 'failed';
    },
  },
});

export const { setListNews, setError, setLoading, setStatusSucceeded, setStatusFailed } = NewsSlice.actions;

export default NewsSlice.reducer;
