import {buildQueryString} from "./buildQueryString";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.weatherapi.com/v1";
export const fetchFromApi = async ({path, params}) => {
  const defaultParams = {
    key: API_KEY,
  };

  const allParams = {
    ...defaultParams,
    ...(params || {})
  };

  const response = await  fetch(`${API_URL}${path}?${buildQueryString(allParams)}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};