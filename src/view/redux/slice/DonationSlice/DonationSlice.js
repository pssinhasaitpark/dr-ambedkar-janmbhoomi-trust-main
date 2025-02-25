
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donations: [],  
  status: 'idle',  
  error: null,
};

const DonationSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setDonations: (state, action) => {
      state.donations = action.payload; 
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

export const { setDonations, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = DonationSlice.actions;

export default DonationSlice.reducer;
