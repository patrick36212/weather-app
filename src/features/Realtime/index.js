import {Section} from "../../components/Section";
import RealTimeInfo from "../../components/InfoTile";
import DateComponent from "../../components/DateComponent";
import {useQuery} from "react-query";
import {getRealTimeData} from "./getRealTimeData";

const Realtime = ({coordinates}) => {

  const {data} = useQuery(
    ["realTimeData", {coordinates}],
    () => {
      if (coordinates.lat === null || coordinates.lon === null) {
        return null
      } else {
        const stringifyCoordinates = `${coordinates.lat.toString()},${coordinates.lon.toString()}`;
        return getRealTimeData(stringifyCoordinates)
      }
    }
  );

  return (
    data && (
      <Section>
        <DateComponent
          time={data.location.localtime_epoch}
          fullDate={data.location.localtime}
        />
        <Section innerSection>
          <RealTimeInfo
            icon={data.current.condition.icon}
            city={data.location.name}
            country={data.location.country}
            degrees={data.current.temp_c}
            realTemp={data.current.feelslike_c}
            humidify={data.current.humidity}
            visibility={data.current.vis_km}
            pressure={data.current.pressure_mb}
          />
        </Section>
      </Section>
    )
  )
};

export default Realtime;