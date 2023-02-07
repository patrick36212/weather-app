import {
  AdditionalInfo,
  AdditionalWrapper,
  Icon,
  IconInfoWrapper,
  Info,
  InfoWrapper,
  MainWrapper,
  SunriseIcon, SunsetIcon,
  Title
} from "./styled";


const InfoTile = ({city, country, icon, degrees, realTemp, humidify, visibility, pressure, sunriseT, sunsetT}) => {
   const visibilityValue = (visibility / 1000).toFixed(2);

  return (
    <MainWrapper>
      <AdditionalWrapper>
        <Title>{city}, {country}</Title>
        <IconInfoWrapper>
          <Icon icon={icon} />
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

export default InfoTile;