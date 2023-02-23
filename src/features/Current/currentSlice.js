import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    cityList: [],
    isSearchActive: false,
    coordinates: null,
    cityCoordinates: null,
  },
  reducers: {
    setCityList: ({ cityList }, { payload: city }) => {
      cityList.push(city);
    },
    removeCityFromCityList: ({ cityList }, { payload: cityId }) => {
      const cityIndex = cityList.findIndex(({ id }) => id === cityId);
      cityList.splice(cityIndex, 1);
    },
    updateCityInCityList: (
      { cityList },
      { payload: cityId, updatedCityData }
    ) => {
      const cityIndex = cityList.findIndex(({ id }) => id === cityId);
      // fn for update particular object data
    },
    setCoordinates: (state, { payload: coordinates }) => {
      state.coordinates = coordinates;
    },
    setCityCoordinates: (state, { payload: cityCoordinates }) => {
      state.cityCoordinates = cityCoordinates;
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
  setCityCoordinates,
  toggleSearchActive,
  updateCityInCityList,
} = currentSlice.actions;

const selectCurrentState = (state) => state.current;

export const selectCityList = (state) => selectCurrentState(state).cityList;
export const selectCoordinates = (state) =>
  selectCurrentState(state).coordinates;
export const selectCityCoordinates = (state) =>
  selectCurrentState(state).cityCoordinates;
export const selectIsSearchActive = (state) =>
  selectCurrentState(state).isSearchActive;

export default currentSlice.reducer;
