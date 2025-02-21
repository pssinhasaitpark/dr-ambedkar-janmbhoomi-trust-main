import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../redux/slice/HomeSlice/HomeSlice';  
// import EventReducer from '../redux/slice/EventSlice/EventSlice'
import { EventSlice } from './slice/index';

const store = configureStore({
  reducer: {
    Home: HomeReducer,
   Event: EventSlice,
  },
});

export default store;
