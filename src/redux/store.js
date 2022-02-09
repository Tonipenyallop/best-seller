import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import toggleReducer from "./toggle";
import bookSlice from "./bookSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    book: bookSlice,
  },
});
