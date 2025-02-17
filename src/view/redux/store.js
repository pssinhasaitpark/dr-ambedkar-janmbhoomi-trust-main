import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../redux/slice/HomeSlice/HomeSlice';  


const store = configureStore({
  reducer: {
    Home: HomeReducer,
  },
});

export default store;
