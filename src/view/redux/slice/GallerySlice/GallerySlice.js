
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gallerys: [],  
  status: 'idle',  
  error: null,
};

const GallerySlice = createSlice({
  name: ' gallerys',
  initialState,
  reducers: {
    setGallerys: (state, action) => {
      state.gallerys = action.payload; 
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

export const {  setGallerys, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = GallerySlice.actions;

export default GallerySlice.reducer;
