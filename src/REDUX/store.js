import { configureStore } from "@reduxjs/toolkit";
import channelStore from "../REDUX/components/SimplyLearn";

export const store = configureStore({
  reducer: {
    simplylearn: channelStore,
  },
});
