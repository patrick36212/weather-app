export const buildQueryString = (params, initialQueryString) => {
  const urlSearchParams = new URLSearchParams(initialQueryString);

  for (const key in params){
    const value = params[key];

    if (value === undefined) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }
  }

  return urlSearchParams.toString();
};