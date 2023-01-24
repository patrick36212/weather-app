import {RITitle, RIWrapper, RIInfo, RIAdditionalInfoWrapper, RIAdditionalInfo} from "./styled";

const RealTimeInfo = ({city, country, degrees, realTemp, humidify, visibility, pressure}) => {
  return (<RIWrapper>
    <RITitle>{city}, {country}</RITitle>

    <RIInfo>{degrees}℃</RIInfo>
    <RIAdditionalInfoWrapper>
      <RIAdditionalInfo>Feels like: {realTemp}℃</RIAdditionalInfo>
      <RIAdditionalInfo>Humidify: {humidify}%</RIAdditionalInfo>
      <RIAdditionalInfo>Visibility: {visibility}km</RIAdditionalInfo>
      <RIAdditionalInfo>Pressure: {pressure}hPA</RIAdditionalInfo>
    </RIAdditionalInfoWrapper>
  </RIWrapper>)
};

export default RealTimeInfo;