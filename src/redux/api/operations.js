import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const axiosFetcher = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk("fetchCars", async (_, thunkAPI) => {
  try {
    const response = await axiosFetcher(`cars`);
    console.log(response.data);
    return response.data.cars;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
