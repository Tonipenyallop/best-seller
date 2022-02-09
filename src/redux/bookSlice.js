import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rank: 0,
  rankedBook: [],
  mode: "rankings",
  typedInput: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.mode = action.payload;
      console.log(state.mode);
    },
    updateInput: (state, action) => {
      state.typedInput = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, updateInput } = bookSlice.actions;

export default bookSlice.reducer;
