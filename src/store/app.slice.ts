import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: { test: false, test1: "" },
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setTest1: (state, action) => {
      state.test1 = action.payload;
    },
  },
});

export const {setTest,setTest1} = appSlice.actions
