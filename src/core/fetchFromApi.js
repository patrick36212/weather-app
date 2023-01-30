import {buildQueryString} from "./buildQueryString";

const API_KEY = "c3c7dcbf50539504d6b915c9e37f3659";
const API_URL = "http://api.openweathermap.org/";
export const fetchFromApi = async ({path, params}) => {
  const defaultParams = {
    appid: API_KEY,
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