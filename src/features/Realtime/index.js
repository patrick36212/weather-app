import {Section} from "../../components/Section";
import RealTimeInfo from "./RealTimeInfo";

const Realtime = () => {
  return (
    <Section>
        <RealTimeInfo
          city={"Warsaw"}
          country={"PL"}
          degrees={7}
          realTemp={5}
          humidify={91}
          visibility={10}
          pressure={1020}
          sunriseT={"6:45"}
          sunsetT={"21:15"}
        />
    </Section>
  )
}

export default Realtime;