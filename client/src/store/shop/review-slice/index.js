import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata) => {
    const response = await axios.post(
<<<<<<< HEAD
      `http://localhost:5000/api/shop/review/add`,
=======
      `https://miniproject-3-0-5.onrender.com/api/shop/review/add`,
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      formdata
    );

    return response.data;
  }
);

export const getReviews = createAsyncThunk("/order/getReviews", async (id) => {
  const response = await axios.get(
<<<<<<< HEAD
    `http://localhost:5000/api/shop/review/${id}`
=======
    `https://miniproject-3-0-5.onrender.com/api/shop/review/${id}`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
  );

  return response.data;
});

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      });
  },
});

export default reviewSlice.reducer;
