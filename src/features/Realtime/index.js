import {Section} from "../../components/Section";
import RealTimeInfo from "./RealTimeInfo";
import {useSelector} from "react-redux";
import {selectRealTimeData, selectRealTimeDataCoordinates, selectRealTimeStatus} from "./realTimeSlice";

const Realtime = () => {
  const realTimeData = useSelector(selectRealTimeData);
  const realTimeStatus = useSelector(selectRealTimeStatus);
  const realTimeCityName = useSelector(selectRealTimeDataCoordinates);

  return (
    <Section innerSection>
      {realTimeStatus === "success" && (
        <RealTimeInfo
          icon={realTimeData.weather[0].icon}
          city={realTimeCityName.city}
          country={realTimeData.sys.country}
          station={realTimeData.name}
          degrees={realTimeData.main.temp.toFixed(0)}
          realTemp={realTimeData.main.feels_like.toFixed(0)}
          humidify={realTimeData.main.humidity}
          visibility={realTimeData.visibility}
          pressure={realTimeData.main.pressure}
          sunriseT={realTimeData.sys.sunrise}
          sunsetT={realTimeData.sys.sunset}
        />)}
    </Section>
  )
}

export default Realtime;