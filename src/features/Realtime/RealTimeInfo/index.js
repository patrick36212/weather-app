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
          <AdditionalInfo>Visibility: {visibility}km</AdditionalInfo>
          <AdditionalInfo>Pressure: {pressure}hPA</AdditionalInfo>
        </InfoWrapper>
      </AdditionalWrapper>

      <AdditionalWrapper>
        <Title centerTitle>Sunrise</Title>

        <IconInfoWrapper>
          <SunriseIcon/>
          <Info>{sunriseT}</Info>
        </IconInfoWrapper>
      </AdditionalWrapper>

      <AdditionalWrapper>
        <Title centerTitle>Sunset</Title>

        <IconInfoWrapper>
          <SunsetIcon/>
          <Info>{sunsetT}</Info>
        </IconInfoWrapper>
      </AdditionalWrapper>
    </MainWrapper>
  )
};

export default RealTimeInfo;