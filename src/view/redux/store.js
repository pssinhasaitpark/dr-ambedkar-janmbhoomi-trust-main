import { configureStore } from '@reduxjs/toolkit'; 
import { EventSlice,ContactSlice,SubscribeSlice,AboutSlice,GallerySlice,DonationSlice,HomeSlice,BookSlice,DonateSlice,TrusteeSlice, TestimonialSlice, NewsSlice, NewsListSlice, BookSliderSlice,BookListSlice,SocialMediaSlice } from './slice/index';

const store = configureStore({
  reducer: {
    Home: HomeSlice,
   Event: EventSlice,
   contact:ContactSlice,
   Subscribe:SubscribeSlice,
   abouts:AboutSlice,
   Gallery:GallerySlice,
   Donation:DonationSlice,
   Book:BookSlice,
   donate:DonateSlice,
   trustee:TrusteeSlice,
   testimonial:TestimonialSlice,
   news:NewsSlice,
   lists:NewsListSlice,
   BookSlider:BookSliderSlice,
   booklists:BookListSlice,
   socials:SocialMediaSlice,
  },
});

export default store;














































