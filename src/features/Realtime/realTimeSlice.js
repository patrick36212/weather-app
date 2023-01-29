import {createSlice} from "@reduxjs/toolkit";

export const realTimeSlice = createSlice({
  name: "realTime",
  initialState: {
    status: "initial",
    data: []
  },
  reducers: {
    fetchRealTime: state => {
      state.status = "loading";
    },
    fetchRealTimeError: state => {
      state.status = "error";
    },
    fetchRealTimeSuccess: (state, {payload: data}) => {
      state.status = "success";
      state.data = data;
    },
  }
});

export const {
  fetchRealTime,
  fetchRealTimeError,
  fetchRealTimeSuccess
} = realTimeSlice.actions;

const selectState = state => state.realTime;

export const selectRealTimeStatus = state => selectState(state).status;
export const selectRealTimeData = state => selectState(state).data;

export default realTimeSlice.reducer;