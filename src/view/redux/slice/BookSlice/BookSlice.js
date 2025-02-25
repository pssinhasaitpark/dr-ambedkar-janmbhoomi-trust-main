
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],  
  status: 'idle',  
  error: null,
};

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
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

export const {  setBooks, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = BookSlice.actions;

export default BookSlice.reducer;
