import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksliders: [],  
  status: 'idle',  
  error: null,
};

const BookSliderSlice = createSlice({
  name: 'booksliders',
  initialState,
  reducers: {
 
    setBookSliders: (state, action) => {
      state.booksliders = action.payload; 
      
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

export const { setBookSliders, setError, setLoading, setStatusSucceeded, setStatusFailed } = BookSliderSlice.actions;

export default BookSliderSlice.reducer;
