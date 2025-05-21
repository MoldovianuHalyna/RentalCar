import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  carItems: [],
  isError: false,
  isLoading: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.carItems = action.payload;
      state.isLoading = false;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.carItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Fetch error:", action.payload);
      });
  },
});
export const carReducer = slice.reducer;
