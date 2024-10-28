import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/addnewproduct",
  async (formData) => {
    const result = await axios.post(
<<<<<<< HEAD
      "https://trendify-89pa.onrender.com/api/admin/products/add",
=======
      "https://miniproject-3-0-5.onrender.com/api/admin/products/add",
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const result = await axios.get(
<<<<<<< HEAD
      "https://trendify-89pa.onrender.com/api/admin/products/get"
=======
      "https://miniproject-3-0-5.onrender.com/api/admin/products/get"
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }) => {
    const result = await axios.put(
<<<<<<< HEAD
      `https://trendify-89pa.onrender.com/api/admin/products/edit/${id}`,
=======
      `https://miniproject-3-0-5.onrender.com/api/admin/products/edit/${id}`,
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id) => {
    const result = await axios.delete(
<<<<<<< HEAD
      `https://trendify-89pa.onrender.com/api/admin/products/delete/${id}`
=======
      `https://miniproject-3-0-5.onrender.com/api/admin/products/delete/${id}`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return result?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default AdminProductsSlice.reducer;
