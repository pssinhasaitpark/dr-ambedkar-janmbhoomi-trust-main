import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [],  
  status: 'idle', 
  error: null,
};

const NewListSlice = createSlice({
  name: 'lists', 
  initialState,
  reducers: {
    setListNews: (state, action) => {
      state.news = action.payload;  
      state.status = 'succeeded';  
      state.error = null;  
    },
    setImage: (state, action) => {
      state.images = action.payload;  
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

export const { setListNews, setImage, setError, setLoading, 
  setStatusSucceeded, setStatusFailed } = NewListSlice.actions;

export default  NewListSlice.reducer;
