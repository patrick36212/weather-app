import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    cityList: [],
  },
  reducers: {
    setCityList: (state, { payload: city }) => {
      state.cityList.push(city);
    },
    removeCityFromCityList: ({ cityList }, { payload: cityId }) => {
      const cityIndex = cityList.findIndex(({ id }) => id === cityId);
      cityList.splice(cityIndex, 1);
    },
    updateCityDataInCityList: (
      state,
      { payload: { cityId, updatedWeatherData } }
    ) => {
      const cityIndex = state.cityList.findIndex(({ id }) => id === cityId);
      state.cityList.splice(cityIndex, 1, updatedWeatherData);
    },
  },
});

export const { setCityList, removeCityFromCityList, updateCityDataInCityList } =
  currentSlice.actions;

const selectCurrentState = (state) => state.current;

export const selectCityList = (state) => selectCurrentState(state).cityList;

export default currentSlice.reducer;
