import {
  SearchDropdownInfo,
  SearchDropdownInfoButton,
  SearchDropdownInfoItem,
  SearchDropdownInfoList,
  SearchDropdownWrapper,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
} from "./styled";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSearchData } from "./getSearchData";
import useDebounce from "./useDebounce";
import { useDispatch } from "react-redux";
import {
  setCoordinates,
  toggleSearchActive,
} from "../../features/Current/currentSlice";

const Search = ({ visible }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { data } = useQuery(["autocomplete", debouncedQuery], () => {
    if (!query) {
      return null;
    } else {
      return getSearchData(debouncedQuery);
    }
  });

  const handleOnClick = (event, autocomplete) => {
    event.preventDefault();
    dispatch(
      setCoordinates({
        lat: autocomplete.lat,
        lon: autocomplete.lon,
      })
    );
    dispatch(toggleSearchActive());
    setQuery("");
  };

  return (
    <SearchWrapper visible={visible}>
      <SearchInputWrapper>
        <SearchIcon />
        <SearchInput
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search by city name"
          value={query || ""}
        />
      </SearchInputWrapper>
      {data && (
        <SearchDropdownWrapper>
          <SearchDropdownInfoList>
            {data.slice(0, 5).map((autocomplete) => (
              <SearchDropdownInfoItem key={autocomplete.id}>
                <SearchDropdownInfoButton
                  type="submit"
                  onClick={(event) => handleOnClick(event, autocomplete)}
                >
                  <SearchDropdownInfo cityName>
                    {autocomplete.name}, {autocomplete.country}
                  </SearchDropdownInfo>
                  <SearchDropdownInfo>
                    lat: {autocomplete.lat} lon: {autocomplete.lon}
                  </SearchDropdownInfo>
                </SearchDropdownInfoButton>
              </SearchDropdownInfoItem>
            ))}
          </SearchDropdownInfoList>
        </SearchDropdownWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;
