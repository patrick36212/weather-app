import {
  Sun,
  CloudSun,
  MoonStars,
  CloudMoon,
  Cloud,
  Clouds,
  CloudRainHeavy,
  CloudRain,
  CloudLightningRain,
  CloudSnow,
  CloudFog
} from "@styled-icons/bootstrap";
import styled from "styled-components";

export const ClearDay = styled(Sun)`
  width: 48px;
`;

export const ClearNight = styled(MoonStars)`
  width: 48px;
`;

export const FewCloudsDay = styled(CloudSun)`
  width: 48px;
`;

export const FewCloudsNight = styled(CloudMoon)`
  width: 48px;
`;

export const NormalClouds = styled(Cloud)`
  width: 48px;
`;

export const BlackClouds = styled(Clouds)`
  width: 48px;
`;

export const BigRain = styled(CloudRainHeavy)`
  width: 48px;
`;

export const SmallRain = styled(CloudRain)`
  width: 48px;
`;

export const Thunderstorm = styled(CloudLightningRain)`
  width: 48px;
`;

export const Snow = styled(CloudSnow)`
  width: 48px;
`;

export const Mist = styled(CloudFog)`
  width: 48px;
`;