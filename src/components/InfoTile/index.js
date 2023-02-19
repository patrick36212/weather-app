import {
  AdditionalInfo,
  AdditionsInfoWrapper,
  ControlButtonsWrapper,
  DeleteButton,
  Icon,
  IconInfoWrapper,
  Info,
  InfoWrapper,
  MainWrapper,
  RefreshButton,
  Title,
} from "./styled";

const InfoTile = ({
  city,
  country,
  icon,
  degrees,
  realTemp,
  humidify,
  visibility,
  pressure,
  localT,
  weather,
  refreshData,
  deleteTile,
}) => {
  const visibilityValue = visibility.toFixed(2);

  return (
    <MainWrapper>
      <ControlButtonsWrapper>
        <RefreshButton onClick={refreshData} />
        <DeleteButton onClick={deleteTile} />
      </ControlButtonsWrapper>
      <Title>
        {city}, {country}
      </Title>
      <AdditionalInfo>Data time: {localT}</AdditionalInfo>
      <InfoWrapper>
        <IconInfoWrapper>
          <Icon icon={icon} />
          <Info>{degrees}℃</Info>
          <AdditionalInfo>Weather:</AdditionalInfo>
          <AdditionalInfo bold="true">{weather}</AdditionalInfo>
        </IconInfoWrapper>

        <AdditionsInfoWrapper>
          <AdditionalInfo>Feels like: {realTemp}℃</AdditionalInfo>
          <AdditionalInfo>Humidify: {humidify}%</AdditionalInfo>
          <AdditionalInfo>Visibility: {visibilityValue}km</AdditionalInfo>
          <AdditionalInfo>Pressure: {pressure}hPA</AdditionalInfo>
        </AdditionsInfoWrapper>
      </InfoWrapper>
    </MainWrapper>
  );
};

export default InfoTile;
