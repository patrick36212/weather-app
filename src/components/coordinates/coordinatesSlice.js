import {createSlice} from "@reduxjs/toolkit";

export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState: {
    status: "loading",
    query: null,
    coordinates: []
  },
  reducers: {
    setQuery: (state, {payload: queryValue}) => {
      state.query = queryValue;
    },
    fetchCoordinatesError: state => {
      state.status = "error";
    },
    fetchCoordinatesSuccess: (state, {payload: coordinates}) => {
      state.status = "success";
      state.coordinates = coordinates;
    },
  }
});

export const {
  setQuery,
  fetchCoordinatesError,
  fetchCoordinatesSuccess
} = coordinatesSlice.actions;

const selectCoordinatesState = state => state.coordinates;

export const selectQuery = state => selectCoordinatesState(state).query;
export const selectCoordinates = state => selectCoordinatesState(state).coordinates;

export default coordinatesSlice.reducer;