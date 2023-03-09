import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import DateComponent from "../../components/DateComponent";
import Search from "../../components/Search";
import InfoTile from "../../components/InfoTile";
import {
  ButtonIcon,
  RealTimeAddButton,
  RealTimeInfo,
  RealTimeWrapper,
} from "./styled";
import { getCurrentData } from "./getCurrentData";
import { nanoid } from "@reduxjs/toolkit";
import {
  removeCityFromCityList,
  selectCityList,
  selectCoordinates,
  selectIsSearchActive,
  setCityList,
  setCoordinates,
  toggleSearchActive,
  updateCityDataInCityList,
} from "./currentSlice";

const Current = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const isSearchActive = useSelector(selectIsSearchActive);
  const cityList = useSelector(selectCityList);

  const currentData = useQuery(["currentData", { coordinates }], () => {
    if (!!coordinates) {
      const stringifyCoordinates = `${coordinates.lat.toString()},${coordinates.lon.toString()}`;
      return getCurrentData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!currentData.data) {
      if (cityList.some((city) => city.coordinates === coordinates)) {
        const city = cityList.find((city) => city.coordinates === coordinates);

        const updatedCity = {
          id: city.id,
          coordinates: city.coordinates,
          weatherData: currentData.data,
        };

        dispatch(
          updateCityDataInCityList({
            cityId: city.id,
            updatedWeatherData: updatedCity,
          })
        );
        dispatch(setCoordinates(null));
      } else {
        dispatch(
          setCityList({
            id: nanoid(),
            coordinates: {
              lat: currentData.data.location.lat,
              lon: currentData.data.location.lon,
            },
            weatherData: currentData.data,
          })
        );
        dispatch(setCoordinates(null));
      }
    }
  }, [currentData.data, dispatch, coordinates, cityList]);

  return (
    <>
      <Header />
      <Main>
        <DateComponent />
        <Section>
          {cityList.map((city) => (
            <RealTimeWrapper key={city.id}>
              <InfoTile
                deleteTile={() => dispatch(removeCityFromCityList(city.id))}
                refreshData={() => dispatch(setCoordinates(city.coordinates))}
                icon={city.weatherData.current.condition.icon}
                city={city.weatherData.location.name}
                country={city.weatherData.location.country}
                localT={city.weatherData.current.last_updated}
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
      </Main>
    </>
  );
};

export default Current;
