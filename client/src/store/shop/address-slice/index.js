import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  addressList: [],
};

export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData) => {
    const response = await axios.post(
<<<<<<< HEAD
      "http://localhost:5000/api/shop/address/add",
=======
      "https://miniproject-3-0-5.onrender.com/api/shop/address/add",
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      formData
    );

    return response.data;
  }
);

export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId) => {
    const response = await axios.get(
<<<<<<< HEAD
      `http://localhost:5000/api/shop/address/get/${userId}`
=======
      `https://miniproject-3-0-5.onrender.com/api/shop/address/get/${userId}`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return response.data;
  }
);

export const editaAddress = createAsyncThunk(
  "/addresses/editaAddress",
  async ({ userId, addressId, formData }) => {
    const response = await axios.put(
<<<<<<< HEAD
      `http://localhost:5000/api/shop/address/update/${userId}/${addressId}`,
=======
      `https://miniproject-3-0-5.onrender.com/api/shop/address/update/${userId}/${addressId}`,
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      formData
    );

    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
<<<<<<< HEAD
      `http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`
=======
      `https://miniproject-3-0-5.onrender.com/api/shop/address/delete/${userId}/${addressId}`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload.data;
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      });
  },
});

export default addressSlice.reducer;
