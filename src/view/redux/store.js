import { configureStore } from '@reduxjs/toolkit'; 
import { EventSlice,ContactSlice,SubscribeSlice,AboutSlice,GallerySlice,DonationSlice,HomeSlice,BookSlice,DonateSlice } from './slice/index';

const store = configureStore({
  reducer: {
    Home: HomeSlice,
   Event: EventSlice,
   contact:ContactSlice,
   Subscribe:SubscribeSlice,
   About:AboutSlice,
   Gallery:GallerySlice,
   Donation:DonationSlice,
   Book:BookSlice,
   donate:DonateSlice,
  },
});

export default store;














































