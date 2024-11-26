import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Adjust the path to your user slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add other slices here if needed
  },
});

export default store; // Default export
