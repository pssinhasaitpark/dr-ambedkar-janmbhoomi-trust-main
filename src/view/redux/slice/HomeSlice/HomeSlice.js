
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  banners: [],
  status: 'idle',
  error: null,
};
const HomeSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
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
export const { setBanners, setError, setLoading, setStatusSucceeded, setStatusFailed } = HomeSlice.actions;

export default HomeSlice.reducer;
