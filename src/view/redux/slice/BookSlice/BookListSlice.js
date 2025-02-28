
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booklists: [],  
  status: 'idle',  
  error: null,
};

const BookListSlice = createSlice({
  name: 'booklists',
  initialState,
  reducers: {
    setBookdetails: (state, action) => {
      state.books = action.payload; 
    },
    setImage: (state, action) => {
      state.images = action.payload; 
    },
    setError: (state, action) => {
      state.error = action.payload;  
    },
    setLoading: (state) => {
      state.status = 'loading';  
    },
    setStatusSucceeded: (state) => {
      state.status = 'succeeded';  
    },
    setStatusFailed: (state) => {
      state.status = 'failed'; 
    },
  },
});

export const {  setBookdetails, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } =BookListSlice.actions;

export default BookListSlice.reducer;
