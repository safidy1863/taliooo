import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app.slice";

const store = configureStore({
  reducer: {
    test: appSlice.reducer,
  },
});

export default store;
