import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
<<<<<<< HEAD
      `http://localhost:5000/api/common/feature/get`
=======
      `https://miniproject-3-0-5.onrender.com/api/common/feature/get`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
<<<<<<< HEAD
      `http://localhost:5000/api/common/feature/add`,
=======
      `https://miniproject-3-0-5.onrender.com/api/common/feature/add`,
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      { image }
    );

    return response.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      });
  },
});

export default commonSlice.reducer;
