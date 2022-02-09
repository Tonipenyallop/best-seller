import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import toggleReducer from "./toggle";
export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
  },
});
