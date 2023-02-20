import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    cityList: [],
    isSearchActive: false,
    coordinates: null,
  },
  reducers: {
    setCityList: ({ cityList }, { payload: city }) => {
      cityList.push(city);
    },
    removeCityFromCityList: ({ cityList }, { payload: cityId }) => {
      const cityIndex = cityList.findIndex(({ id }) => id === cityId);
      cityList.splice(cityIndex, 1);
    },
    setCoordinates: (state, { payload: coordinates }) => {
      state.coordinates = coordinates;
    },
    toggleSearchActive: (state) => {
      state.isSearchActive = !state.isSearchActive;
    },
  },
});

export const {
  setCityList,
  removeCityFromCityList,
  setCoordinates,
  toggleSearchActive,
} = currentSlice.actions;

const selectCurrentState = (state) => state.current;

export const selectCityList = (state) => selectCurrentState(state).cityList;
export const selectCoordinates = (state) =>
  selectCurrentState(state).coordinates;
export const selectIsSearchActive = (state) =>
  selectCurrentState(state).isSearchActive;

export default currentSlice.reducer;
