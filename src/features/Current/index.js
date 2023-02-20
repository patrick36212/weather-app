import { Section } from "../../components/Section";
import { useQuery } from "react-query";
import { getCurrentData } from "./getRealTimeData";
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
  selectCityList,
  selectCoordinates,
  selectIsSearchActive,
  setCityList,
  setCoordinates,
  toggleSearchActive,
} from "./currentSlice";
import { nanoid } from "@reduxjs/toolkit";

const Current = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const isSearchActive = useSelector(selectIsSearchActive);
  const cityList = useSelector(selectCityList);

  const { data } = useQuery(["realTimeData", { coordinates }], () => {
    if (!!coordinates) {
      const stringifyCoordinates = `${coordinates.lat.toString()},${coordinates.lon.toString()}`;
      return getCurrentData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!data) {
      dispatch(
        setCityList({
          id: nanoid(),
          data,
        })
      );
      dispatch(setCoordinates(null));
    }
  }, [data]);

  return (
    <Section>
      {cityList.map((city) => (
        <RealTimeWrapper key={city.id}>
          <InfoTile
            deleteTile={() => dispatch(removeCityFromCityList(city.id))}
            icon={city.data.current.condition.icon}
            city={city.data.location.name}
            country={city.data.location.country}
            localT={city.data.location.localtime}
            degrees={city.data.current.temp_c}
            weather={city.data.current.condition.text}
            realTemp={city.data.current.feelslike_c}
            humidify={city.data.current.humidity}
            visibility={city.data.current.vis_km}
            pressure={city.data.current.pressure_mb}
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
