
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],  
  status: 'idle',  
  error: null,
};

const EventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload; 
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

export const { setEvents, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = EventSlice.actions;

export default EventSlice.reducer;
