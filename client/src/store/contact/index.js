import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData) => {
<<<<<<< HEAD
    const response = await fetch('http://localhost:5000/api/contact/send', {
=======
    const response = await fetch('https://miniproject-3-0-5.onrender.com/api/contact/send', {
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    return await response.json(); // Adjust based on your API response
  }
);

// Create the slice
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;