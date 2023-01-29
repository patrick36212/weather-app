import {configureStore} from "@reduxjs/toolkit";
import realTimeReducer from "../features/Realtime/realTimeSlice";

const store = configureStore({
  reducer: {
    realTime: realTimeReducer,
  }
});

export default store;