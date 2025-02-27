import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const TestimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.data = action.payload;  
    },
    setTestimonialError: (state, action) => {
      state.error = action.payload;  
    },
    setTestimonialLoading: (state) => {
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

export const { setTestimonial, setTestimonialError, setTestimonialLoading, setStatusSucceeded, setStatusFailed } = TestimonialSlice.actions;
export default TestimonialSlice.reducer;
