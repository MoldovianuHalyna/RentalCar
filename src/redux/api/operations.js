import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const axiosFetcher = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
  "fetchCars",
  async ({ page = 1, limit = 8 }, thunkAPI) => {
    try {
      const response = await axiosFetcher(`cars?page=${page}&limit=${limit}`);
      return {
        cars: response.data.cars,
        totalPages: response.data.totalPages,
        page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCar = createAsyncThunk(
  "fetchOneCar",
  async (carId, thunkAPI) => {
    try {
      const response = await axiosFetcher(`cars/${carId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchBrands = createAsyncThunk(
  "fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axiosFetcher(`brands`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
