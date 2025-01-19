import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice.js';

export const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});
