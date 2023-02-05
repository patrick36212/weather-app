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
import {useDispatch, useSelector} from "react-redux";
import {selectCoordinates, selectQuery, setQuery} from "../../coordinates/coordinatesSlice";
import {setCoordinates} from "../../../features/Realtime/realTimeSlice";

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery)
  const coordinates = useSelector(selectCoordinates);

  return (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchIcon/>
        <SearchInput
          onChange={({target}) => dispatch(setQuery(target.value))}
          placeholder="Search by city name"
          value={query || ""}
        />
      </SearchInputWrapper>
      {query &&
        <SearchDropdownWrapper>
          <SearchDropdownInfoList>
            {coordinates.map(city => (
              <SearchDropdownInfoItem key={city.lat}>
                <SearchDropdownInfoButton
                  onClick={() => {
                    dispatch(setCoordinates({
                      city: city.name,
                      lat: city.lat,
                      lon: city.lon
                    }));
                    dispatch(setQuery(""));
                  }}
                >
                  <SearchDropdownInfo cityName>{city.name}, {city.country}</SearchDropdownInfo>
                  <SearchDropdownInfo>lat: {city.lat.toFixed(2)} lon: {city.lon.toFixed(2)}</SearchDropdownInfo>
                </SearchDropdownInfoButton>
              </SearchDropdownInfoItem>
            ))}
          </SearchDropdownInfoList>
        </SearchDropdownWrapper>}
    </SearchWrapper>
  )
};

export default Search;