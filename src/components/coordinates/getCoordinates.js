import {fetchFromApi} from "../../core/fetchFromApi";

export const getCoordinates = (queryValue) => fetchFromApi({
  path: "geo/1.0/direct",
  params: {
    q: queryValue,
    limit: 5
  }
});