import { createSlice } from '@reduxjs/toolkit';

const BookingData = createSlice({
  name: 'Booking',
  initialState: {
    portData: null,
  },
  reducers: {
     AddPortData(state, actions) {
      const newItem = actions.payload;
      state.portData = newItem.portData;
    },
    clearPortData(state) {
      state.portData = '';
    },
  },
});

export const BookingDataAction = BookingData.actions;

export default BookingData;
