import {buildQueryString} from "./buildQueryString";

const APIKey = "c3c7dcbf50539504d6b915c9e37f3659";
const baseApiURL = "http://api.openweathermap.org/";
export const fetchFromApi = async ({path, params}) => {
  const defaultParams = {
    api_key: APIKey,
  };

  const allParams = {
    ...defaultParams,
    ...(params || {})
  };

  const response = await  fetch(`${baseApiURL}${path}?${buildQueryString(allParams)}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};