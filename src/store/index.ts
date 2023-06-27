import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiRTK } from "./apiRTK/apiRTK";
import favoriteSlice from "./favoriteSlice/favoriteSlice";
import searchQuerySlice from "./searchQuerySlice/searchQuerySlice";


export const store = configureStore({
  reducer: {
    [apiRTK.reducerPath]: apiRTK.reducer,
    favoriteSlice,
    searchQuerySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTK.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
