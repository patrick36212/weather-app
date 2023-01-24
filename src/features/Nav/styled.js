import styled from "styled-components";
import {Compass, Speedometer2, FileBarGraph, Bullseye} from "@styled-icons/bootstrap";
import {ReactComponent as LogoIcon} from "./logo.svg";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoIcon)`
  width: 80px;
  stroke: ${({theme}) => theme.colors.secondaryColor};
  fill: ${({theme}) => theme.colors.secondaryColor};
  filter: drop-shadow(4px 4px 4px ${({theme}) => theme.colors.shadowColor});
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 12px 0;
  font-size: 18px;
  line-height: 20px;
  transition: .3s ease-out;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.secondaryColor};
    transform: scale(1.02);
  }
`;

export const RealTimeIcon = styled(Bullseye)`
  width: 20px;
`;

export const ForecastIcon = styled(FileBarGraph)`
  width: 20px;
`;

export const AirQualityIcon = styled(Speedometer2)`
  width: 20px;
`;

export const MapIcon = styled(Compass)`
  width: 20px;
`;