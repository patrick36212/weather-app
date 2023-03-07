import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    cityList: [],
    isSearchActive: false,
    coordinates: null,
  },
  reducers: {
    setCityList: (state, { payload: city }) => {
      state.cityList.push(city);
    },
    removeCityFromCityList: ({ cityList }, { payload: cityId }) => {
      const cityIndex = cityList.findIndex(({ id }) => id === cityId);
      cityList.splice(cityIndex, 1);
    },
    setCoordinates: (state, { payload: coordinates }) => {
      state.coordinates = coordinates;
    },
    updateCityDataInCityList: (
      state,
      { payload: { cityId, updatedWeatherData } }
    ) => {
      const cityIndex = state.cityList.findIndex(({ id }) => id === cityId);
      state.cityList.splice(cityIndex, 1, updatedWeatherData);
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
  updateCityDataInCityList,
} = currentSlice.actions;

const selectCurrentState = (state) => state.current;

export const selectCityList = (state) => selectCurrentState(state).cityList;
export const selectCoordinates = (state) =>
  selectCurrentState(state).coordinates;
export const selectIsSearchActive = (state) =>
  selectCurrentState(state).isSearchActive;

export default currentSlice.reducer;
