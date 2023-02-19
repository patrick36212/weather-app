import { fetchFromApi } from "../../core/fetchFromApi";

export const getCurrentData = (coordinates) =>
  fetchFromApi({
    path: "/current.json",
    params: {
      q: coordinates,
      aqi: "no",
    },
  });
