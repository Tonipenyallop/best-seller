import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rankingBooks: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    hola: (state, action) => {
      state.rankingBooks.push(action.payload);
      console.log("hola was called");
      console.log(state.rankingBooks);
    },
  },
});

// Action creators are generated for each case reducer function
export const { hola } = bookSlice.actions;

export default bookSlice.reducer;
