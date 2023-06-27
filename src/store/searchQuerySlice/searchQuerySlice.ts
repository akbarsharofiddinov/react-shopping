import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  searchQuery: string;
}
const initialState: IState = {
  searchQuery: "",
};

const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState,
  reducers: {
    handleSearchQuery(state, { payload }: PayloadAction<string>) {
      state.searchQuery = payload;
    },
  },
});

export default searchQuerySlice.reducer;

export const { handleSearchQuery } = searchQuerySlice.actions;
