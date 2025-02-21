import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const SubscribeSlice= createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    setSubscribe: (state, action) => {
      state.data = action.payload;  
    },
    setSubscribeError: (state, action) => {
      state.error = action.payload;  
    },
    setSubscribeLoading: (state) => {
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

export const { setSubscribe, setSubscribeError, setSubscribeLoading, setStatusSucceeded, setStatusFailed } = SubscribeSlice.actions;

export default SubscribeSlice.reducer;
