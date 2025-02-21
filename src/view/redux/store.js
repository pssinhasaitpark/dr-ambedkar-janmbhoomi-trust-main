import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../redux/slice/HomeSlice/HomeSlice';  
// import EventReducer from '../redux/slice/EventSlice/EventSlice'
import { EventSlice,ContactSlice,SubscribeSlice } from './slice/index';

const store = configureStore({
  reducer: {
    Home: HomeReducer,
   Event: EventSlice,
   contact:ContactSlice,
   Subscribe:SubscribeSlice,
  },
});

export default store;














































