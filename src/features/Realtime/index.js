import {Section} from "../../components/Section";
import RealTimeInfo from "./RealTimeInfo";
import {useSelector} from "react-redux";
import {selectRealTimeData, selectRealTimeStatus} from "./realTimeSlice";

const Realtime = () => {
  const realTimeData = useSelector(selectRealTimeData);
  const realTimeStatus = useSelector(selectRealTimeStatus);

  return (
    <Section innerSection>
      {realTimeStatus === "success" && (
        <RealTimeInfo
          city={realTimeData.name}
          country={realTimeData.sys.country}
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