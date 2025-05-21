import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./api/slice";
export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
