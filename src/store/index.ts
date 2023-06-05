import { configureStore } from "@reduxjs/toolkit";
import { apiRTK } from "./apiRTK/apiRTK";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [apiRTK.reducerPath]: apiRTK.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTK.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  