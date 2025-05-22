import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./api/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { heartReducer } from "./heart/heartSlice";

const persistConfig = {
  key: "heart",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, heartReducer);

export const store = configureStore({
  reducer: {
    cars: carReducer,
    heart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
