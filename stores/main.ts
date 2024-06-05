import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/api";
import { verificationApi } from "./verification";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [verificationApi.reducerPath]: verificationApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware, verificationApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
