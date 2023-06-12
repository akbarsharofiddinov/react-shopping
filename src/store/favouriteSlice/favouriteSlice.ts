import { createSlice } from "@reduxjs/toolkit";

interface IState {
  countFavourite: number;
}

const initialState = {
  countFavourite: 0,
};

const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState,
  reducers: {},
});
