import {
  AdditionalInfo,
  AdditionalWrapper,
  IconInfoWrapper,
  Info,
  InfoWrapper,
  MainWrapper,
  SunriseIcon, SunsetIcon,
  Title
} from "./styled";
import {
  BigRain,
  BlackClouds,
  ClearDay,
  ClearNight,
  FewCloudsDay,
  FewCloudsNight,
  Mist,
  NormalClouds,
  SmallRain,
  Snow,
  Thunderstorm
} from "./Icons/styled";


const RealTimeInfo = ({city, country, degrees, realTemp, humidify, visibility, pressure, sunriseT, sunsetT, icon, station}) => {
  const Icons = () => ({
    "01d": <ClearDay/>,
    "01n": <ClearNight/>,
    "02d": <FewCloudsDay/>,
    "02n": <FewCloudsNight/>,
    "03d": <NormalClouds/>,
    "03n": <NormalClouds/>,
    "04d": <BlackClouds/>,
    "04n": <BlackClouds/>,
    "09d": <BigRain/>,
    "09n": <BigRain/>,
    "10d": <SmallRain/>,
    "10n": <SmallRain/>,
    "11d": <Thunderstorm/>,
    "11n": <Thunderstorm/>,
    "13d": <Snow/>,
    "13n": <Snow/>,
    "50d": <Mist/>,
    "50n": <Mist/>
  }[icon]);

  const visibilityValue = (visibility / 1000).toFixed(2);

  const sunsetTime = new Date(sunsetT * 1000);
  const sunriseTime = new Date(sunriseT * 1000);

  return (
    <MainWrapper>
      <AdditionalWrapper>
        <Title>{city}, {country}</Title>
        <AdditionalInfo>Weather station {station}</AdditionalInfo>
        <IconInfoWrapper>
          <Icons/>
          <Info>{degrees}℃</Info>
        </IconInfoWrapper>

        <InfoWrapper>
          <AdditionalInfo>Feels like: {realTemp}℃</AdditionalInfo>
          <AdditionalInfo>Humidify: {humidify}%</AdditionalInfo>
          <AdditionalInfo>Visibility: {visibilityValue}km</AdditionalInfo>
          <AdditionalInfo>Pressure: {pressure}hPA</AdditionalInfo>
        </InfoWrapper>
      </AdditionalWrapper>

      <AdditionalWrapper>
        <Title centerTitle>Sunrise</Title>

        <IconInfoWrapper>
          <SunriseIcon/>
          <Info>{sunriseTime.toLocaleTimeString()}</Info>
        </IconInfoWrapper>
      </AdditionalWrapper>

      <AdditionalWrapper>
        <Title centerTitle>Sunset</Title>

        <IconInfoWrapper>
          <SunsetIcon/>
          <Info>{sunsetTime.toLocaleTimeString()}</Info>
        </IconInfoWrapper>
      </AdditionalWrapper>
    </MainWrapper>
  )
};

export default RealTimeInfo;