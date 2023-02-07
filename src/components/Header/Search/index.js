import {
  SearchDropdownInfo,
  SearchDropdownInfoButton,
  SearchDropdownInfoItem,
  SearchDropdownInfoList,
  SearchDropdownWrapper,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper
} from "./styled";
import {useState} from "react";
import {useQuery} from "react-query";
import {getSearchData} from "./getSearchData";
import useDebounce from "./useDebounce";

const Search = ({setCoordinates}) => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500)

  const {data} = useQuery(
    ["autocomplete", debouncedQuery],
    () => {
      if (!query) {
        return null;
      } else {
        return getSearchData(debouncedQuery);
      }
    }
  );

  return (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchIcon/>
        <SearchInput
          onChange={({target}) => setQuery(target.value)}
          placeholder="Search by city name"
          value={query || ""}
        />
      </SearchInputWrapper>
      {data &&
        <SearchDropdownWrapper>
          <SearchDropdownInfoList>
            {data.map(autocomplete => (
              <SearchDropdownInfoItem key={autocomplete.id}>
                <SearchDropdownInfoButton
                  onClick={() => {
                    setCoordinates({
                      lon: autocomplete.lon,
                      lat: autocomplete.lat
                    })
                    setQuery("")
                  }}
                >
                  <SearchDropdownInfo cityName>{autocomplete.name}, {autocomplete.country}</SearchDropdownInfo>
                  <SearchDropdownInfo>lat: {autocomplete.lat} lon: {autocomplete.lon}</SearchDropdownInfo>
                </SearchDropdownInfoButton>
              </SearchDropdownInfoItem>
            ))}
          </SearchDropdownInfoList>
        </SearchDropdownWrapper>}
    </SearchWrapper>
  )
};

export default Search;