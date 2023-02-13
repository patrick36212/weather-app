import { fetchFromApi } from "../../core/fetchFromApi";

export const getRealTimeData = (coordinates) =>
  fetchFromApi({
    path: "/current.json",
    params: {
      q: coordinates,
      aqi: "no",
    },
  });