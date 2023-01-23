import styled from "styled-components";
import {Fan, Map, Leaf, SatelliteDish, Bullseye} from "@styled-icons/fa-solid";

export const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  border-radius: 20px;
  padding: 24px 20px;
  max-width: max-content;
  background: ${({theme}) => theme.colors.sectionBackground};
  box-shadow: 4px 4px 4px 0 ${({theme}) => theme.colors.shadow};
  color: ${({theme}) => theme.colors.secondaryFont};
`;

export const Logo = styled(Fan)`
  width: 80px;
  color: ${({theme}) => theme.colors.secondaryTileBackground};
  filter: drop-shadow(4px 4px 4px ${({theme}) => theme.colors.shadow});
`;
export const AsideNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const AsideNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 12px 0;
  font-size: 18px;
  line-height: 20px;
  transition: .3s ease-out;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.secondaryTileBackground};
    transform: scale(1.02);
  }
`;

export const RealTimeIcon = styled(Bullseye)`
  width: 20px;
`;

export const ForecastIcon = styled(SatelliteDish)`
  width: 20px;
`;

export const AirQualityIcon = styled(Leaf)`
  width: 20px;
`;

export const MapIcon = styled(Map)`
  width: 20px;
`;