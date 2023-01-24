import {Section} from "../../components/Section";
import RealTimeInfo from "./RealTimeInfo";
import {RealTimeWrapper} from "./styled";

const Realtime = () => {
  return (
    <Section>
      <RealTimeWrapper>
        <RealTimeInfo
          city={"Warsaw"}
          country={"PL"}
          degrees={7}
          realTemp={5}
          humidify={91}
          visibility={10}
          pressure={1020}
        />
      </RealTimeWrapper>
      <RealTimeInfo
        city={"Warsaw"}
        country={"PL"}
        degrees={7}
        realTemp={5}
        humidify={91}
        visibility={10}
        pressure={1020}
      />
    </Section>
  )
}

export default Realtime;