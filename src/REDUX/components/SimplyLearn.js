import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
  name: "channel",
  initialState: {
    subscribed: false,
  },
  reducers: {
    subscribe: (state) => {
      state.subscribed = true;
    },
    unSubscribe: (state) => {
      state.subscribed = false;
    },
  },
});

export const { subscribe, unSubscribe } = subscribeSlice.actions;
export default subscribeSlice.reducer;
