import { configureStore } from '@reduxjs/toolkit';
import userAuth from './userAuth';
import BookingData from './bookingDetails';


const Store = configureStore(
  { reducer: { user: userAuth.reducer,booking:BookingData.reducer} },
);

export default Store;
