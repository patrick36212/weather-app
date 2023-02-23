import { Section } from "../../components/Section";
import { useQuery } from "react-query";
import { getCurrentData } from "./getCurrentData";
import {
  ButtonIcon,
  RealTimeAddButton,
  RealTimeInfo,
  RealTimeWrapper,
} from "./styled";
import { useEffect } from "react";
import Search from "../../components/Search";
import InfoTile from "../../components/InfoTile";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCityFromCityList,
  selectCityCoordinates,
  selectCityList,
  selectCoordinates,
  selectIsSearchActive,
  setCityCoordinates,
  setCityList,
  setCoordinates,
  toggleSearchActive,
  updateCityInCityList,
} from "./currentSlice";
import { nanoid } from "@reduxjs/toolkit";

const Current = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const isSearchActive = useSelector(selectIsSearchActive);
  const cityList = useSelector(selectCityList);
  const cityCoordinates = useSelector(selectCityCoordinates);

  const currentData = useQuery(["currentData", { coordinates }], () => {
    if (!!coordinates) {
      const stringifyCoordinates = `${coordinates.lat.toString()},${coordinates.lon.toString()}`;
      return getCurrentData(stringifyCoordinates);
    }
  });

  const cityData = useQuery(["cityData", { cityCoordinates }], () => {
    if (!!cityCoordinates) {
      const stringifyCityCoordinates = `${cityCoordinates.lat.toString()},${cityCoordinates.lon.toString()}`;
      return getCurrentData(stringifyCityCoordinates);
    }
  });

  useEffect(() => {
    if (!!currentData.data) {
      dispatch(
        setCityList({
          id: nanoid(),
          weatherData: currentData.data,
        })
      );
      dispatch(setCoordinates(null));
    }
  }, [currentData.data]);
  const refreshDataOnClick = (city) => {
    dispatch(
      setCityCoordinates({
        lat: city.weatherData.location.lat,
        lon: city.weatherData.location.lon,
      })
    );
    if (!!cityData) {
      dispatch(updateCityInCityList(city.id));
    }
  };

  return (
    <Section>
      {cityList.map((city) => (
        <RealTimeWrapper key={city.id}>
          <InfoTile
            deleteTile={() => dispatch(removeCityFromCityList(city.id))}
            refreshData={() => refreshDataOnClick(city)}
            icon={city.weatherData.current.condition.icon}
            city={city.weatherData.location.name}
            country={city.weatherData.location.country}
            localT={city.weatherData.location.localtime}
            degrees={city.weatherData.current.temp_c}
            weather={city.weatherData.current.condition.text}
            realTemp={city.weatherData.current.feelslike_c}
            humidify={city.weatherData.current.humidity}
            visibility={city.weatherData.current.vis_km}
            pressure={city.weatherData.current.pressure_mb}
          />
        </RealTimeWrapper>
      ))}
      <RealTimeWrapper>
        <RealTimeAddButton onClick={() => dispatch(toggleSearchActive())}>
          <ButtonIcon />
          <RealTimeInfo>Click + to search</RealTimeInfo>
        </RealTimeAddButton>
        <Search visible={isSearchActive} />
      </RealTimeWrapper>
    </Section>
  );
};

export default Current;
