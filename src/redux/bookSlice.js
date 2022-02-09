import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rank: 0,
  rankedBook: [],
  mode: "rankings",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    hola: (state, action) => {
      state.rank += action.payload;
    },
    toggle: (state, action) => {
      state.mode = action.payload;
      console.log(state.mode);
    },
  },
});

// Action creators are generated for each case reducer function
export const { hola, toggle } = bookSlice.actions;

export default bookSlice.reducer;
