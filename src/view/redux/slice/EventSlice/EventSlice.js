// EventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],  // Change this from 'images' to 'events' to store event data
  status: 'idle',  // idle | loading | succeeded | failed
  error: null,
};

const EventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      console.log('Dispatching setEvents with data:', action.payload); // Log data
      state.events = action.payload;  // Store events in state
    },
    setImage: (state, action) => {
      state.images = action.payload;  // You can leave this for storing images if needed
    },
    setError: (state, action) => {
      state.error = action.payload;  // Store error message in state
    },
    setLoading: (state) => {
      state.status = 'loading';  // Set status to loading
    },
    setStatusSucceeded: (state) => {
      state.status = 'succeeded';  // Set status to succeeded
    },
    setStatusFailed: (state) => {
      state.status = 'failed';  // Set status to failed
    },
  },
});

// Export actions
export const { setEvents, setImage, setError, setLoading, setStatusSucceeded, setStatusFailed } = EventSlice.actions;

export default EventSlice.reducer;
