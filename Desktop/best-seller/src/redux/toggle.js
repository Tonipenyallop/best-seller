import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggling: (state) => {
      if (state.isClicked) state.isClicked = false;
      else state.isClicked = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggling } = toggleSlice.actions;

export default toggleSlice.reducer;
