
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  abouts: [],  
  status: 'idle',  
  error: null,
};

const AboutSlice = createSlice({
  name: '  abouts',
  initialState,
  reducers: {
    setAbouts: (state, action) => {
      state.abouts = action.payload; 
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

export const { setAbouts, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = AboutSlice.actions;

export default AboutSlice.reducer;
