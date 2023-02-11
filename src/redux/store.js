import { configureStore } from '@reduxjs/toolkit';
import userAuth from './userAuth';


const Store = configureStore(
  { reducer: { user: userAuth.reducer } },
);

export default Store;
