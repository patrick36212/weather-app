import { fetchFromApi } from "../../core/fetchFromApi";

export const getSearchData = (query) =>
  fetchFromApi({
    path: "/search.json",
    params: {
      q: query,
    },
  });