// slices/subscriptionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

// Create an async thunk for subscribing
export const subscribe = createAsyncThunk(
  'subscription/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('https://trendify-89pa.onrender.com/api/subscribe', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      const data = await response.json();
      return data; // This will be available in the fulfilled action
    } catch (error) {
      return rejectWithValue(error.message); // This will be available in the rejected action
    }
  }
);

// Create the subscription slice
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(subscribe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // The error message returned from the thunk
      });
  },
});

// Export the reducer and actions
export const { resetState } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
