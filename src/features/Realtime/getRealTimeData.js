import {fetchFromApi} from "../../core/fetchFromApi";

export const getRealTimeData = (lat, lon) => fetchFromApi({
  path: "data/2.5/weather",
  params: {
    lat: lat,
    lon: lon,
    units: "metric"
  }
});