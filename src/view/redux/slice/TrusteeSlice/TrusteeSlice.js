import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const TrusteeSlice = createSlice({
  name: 'trustee',
  initialState,
  reducers: {
    setTrustees: (state, action) => {
      state.data = action.payload;  
    },
    setTrusteeError: (state, action) => {
      state.error = action.payload;  
    },
    setContactLoading: (state) => {
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

export const {   setTrustees,   setTrusteeError, setTrusteeLoading, setStatusSucceeded, setStatusFailed } = TrusteeSlice.actions;

export default TrusteeSlice.reducer;






