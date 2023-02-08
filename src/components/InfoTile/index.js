import {
  AdditionalInfo,
  Icon,
  IconInfoWrapper,
  Info,
  InfoWrapper,
  MainWrapper,
  Title
} from "./styled";


const InfoTile = ({city, country, icon, degrees, realTemp, humidify, visibility, pressure, localT, weather}) => {
  const visibilityValue = visibility.toFixed(2);

  return (
    <MainWrapper>
      <Title>{city}, {country}</Title>
      <AdditionalInfo>
        Local time:
        <br/>{localT}
      </AdditionalInfo>
      <IconInfoWrapper>
        <Icon icon={icon}/>
        <Info>{degrees}℃</Info>
        <AdditionalInfo>Weather:</AdditionalInfo>
        <AdditionalInfo bold="true">{weather}</AdditionalInfo>
      </IconInfoWrapper>

      <InfoWrapper>
        <AdditionalInfo>Feels like: {realTemp}℃</AdditionalInfo>
        <AdditionalInfo>Humidify: {humidify}%</AdditionalInfo>
        <AdditionalInfo>Visibility: {visibilityValue}km</AdditionalInfo>
        <AdditionalInfo>Pressure: {pressure}hPA</AdditionalInfo>
      </InfoWrapper>
    </MainWrapper>
  )
};

export default InfoTile;