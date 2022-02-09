import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rank: 0,
  rankedBook: [],
  mode: "rankings",
  input: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.mode = action.payload;
    },
    updateInput: (state, action) => {
      state.input = action;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, updateInput } = bookSlice.actions;

export default bookSlice.reducer;
