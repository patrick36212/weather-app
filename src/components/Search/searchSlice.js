import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchActive: false,
    coordinates: null,
  },
  reducers: {
    toggleSearchActive: (state) => {
      state.isSearchActive = !state.isSearchActive;
    },
    setCoordinates: (state, { payload: coordinates }) => {
      state.coordinates = coordinates;
    },
  },
});

export const { toggleSearchActive, setCoordinates } = searchSlice.actions;

export const selectCoordinates = (state) => state.search.coordinates;
export const selectIsSearchActive = (state) => state.search.isSearchActive;

export default searchSlice.reducer;
