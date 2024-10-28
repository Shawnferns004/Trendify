import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orderList: [],
  orderDetails: null,
};

export const getAllOrdersForAdmin = createAsyncThunk(
  "/order/getAllOrdersForAdmin",
  async () => {
    const response = await axios.get(
<<<<<<< HEAD
      `https://trendify-89pa.onrender.com/api/admin/orders/get`
=======
      `https://miniproject-3-0-5.onrender.com/api/admin/orders/get`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return response.data;
  }
);

export const getOrderDetailsForAdmin = createAsyncThunk(
  "/order/getOrderDetailsForAdmin",
  async (id) => {
    const response = await axios.get(
<<<<<<< HEAD
      `https://trendify-89pa.onrender.com/api/admin/orders/details/${id}`
=======
      `https://miniproject-3-0-5.onrender.com/api/admin/orders/details/${id}`
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
    );

    return response.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "/order/updateOrderStatus",
  async ({ id, orderStatus }) => {
    const response = await axios.put(
<<<<<<< HEAD
      `https://trendify-89pa.onrender.com/api/admin/orders/update/${id}`,
=======
      `https://miniproject-3-0-5.onrender.com/api/admin/orders/update/${id}`,
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6
      {
        orderStatus,
      }
    );

    return response.data;
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      console.log("resetOrderDetails");

      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersForAdmin.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetailsForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetailsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetailsForAdmin.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      });
  },
});

export const { resetOrderDetails } = adminOrderSlice.actions;

export default adminOrderSlice.reducer;
