import { createSlice } from "@reduxjs/toolkit";

const heartSlice = createSlice({
  name: "heart",
  initialState: {
    favorites: [], // store IDs of favorited cars
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((favId) => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
  },
});

export const { toggleFavorite } = heartSlice.actions;
export const heartReducer = heartSlice.reducer;
