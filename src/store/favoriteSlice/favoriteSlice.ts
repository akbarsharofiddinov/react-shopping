import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStat {
  favorites: IProduct[];
}

const initialState: IStat = {
  favorites: localStorage.getItem("favorites")
    ? (JSON.parse(localStorage.getItem("favorites") || "[]") as IProduct[])
    : [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    handleFavorite(state, { payload }: PayloadAction<IProduct>) {
      
    },
  },
});

export default favoriteSlice.reducer;

export const { handleFavorite } = favoriteSlice.actions;
