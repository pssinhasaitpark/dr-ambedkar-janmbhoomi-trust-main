import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const socialMediaSlice = createSlice({
  name: 'socials',
  initialState,
  reducers: {
    setSocialMedia: (state, action) => {
      state.data = action.payload;
    },
    setSocialMediaError: (state, action) => {
      state.error = action.payload;
    },
    setSocialMediaLoading: (state) => {
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

export const {
  setSocialMedia,
  setSocialMediaError,
  setSocialMediaLoading,
  setStatusSucceeded,
  setStatusFailed,
} = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
