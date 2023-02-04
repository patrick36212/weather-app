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


const RealTimeInfo = ({city, country, degrees, realTemp, humidify, visibility, pressure, sunriseT, sunsetT}) => {
  const visibilityValue = (visibility / 1000).toFixed(2);


  const sunsetTime = new Date(sunsetT * 1000);
  const sunriseTime = new Date(sunriseT * 1000);

  return (
    <MainWrapper>
      <AdditionalWrapper>
        <Title>{city}, {country}</Title>
        <IconInfoWrapper>
          <SunriseIcon/>
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