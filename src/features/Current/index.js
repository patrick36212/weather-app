import { Section } from "../../components/Section";
import { useQuery } from "react-query";
import { getCurrentData } from "./getRealTimeData";
import {
  ButtonIcon,
  RealTimeAddButton,
  RealTimeInfo,
  RealTimeWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import Search from "../../components/Search";
import InfoTile from "../../components/InfoTile";

const Current = () => {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null,
  });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [cityList, setCityList] = useState([]);

  const { data } = useQuery(["realTimeData", { coordinates }], () => {
    if (coordinates.lat === null || coordinates.lon === null) {
      return;
    } else {
      const stringifyCoordinates = `${coordinates.lat.toString()},${coordinates.lon.toString()}`;
      return getCurrentData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!data) {
      setCityList((cityList) => [...cityList, data]);
      setCoordinates({
        lat: null,
        lon: null,
      });
    }
  }, [data]);

  return (
    <Section>
      {cityList.map((city) => (
        <RealTimeWrapper key={city.location.lat}>
          <InfoTile
            icon={city.current.condition.icon}
            city={city.location.name}
            country={city.location.country}
            localT={city.location.localtime}
            degrees={city.current.temp_c}
            weather={city.current.condition.text}
            realTemp={city.current.feelslike_c}
            humidify={city.current.humidity}
            visibility={city.current.vis_km}
            pressure={city.current.pressure_mb}
          />
        </RealTimeWrapper>
      ))}
      <RealTimeWrapper>
        <RealTimeAddButton onClick={() => setIsSearchActive(!isSearchActive)}>
          <ButtonIcon />
          <RealTimeInfo>Click + to search</RealTimeInfo>
        </RealTimeAddButton>
        <Search
          setCoordinates={setCoordinates}
          setIsSearchActive={setIsSearchActive}
          visible={isSearchActive}
        />
      </RealTimeWrapper>
    </Section>
  );
};

export default Current;
