import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  searchQuery: string;
}

const initialState: IState = {
  searchQuery: ""
}

const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState,
  reducers: {
    setSearchQuery(state, {payload}: PayloadAction<string>) {
      state.searchQuery = payload;
    }
  }
})

export default searchQuerySlice.reducer

export const { setSearchQuery } = searchQuerySlice.actions