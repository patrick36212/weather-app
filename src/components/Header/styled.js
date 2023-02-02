import styled from "styled-components";
import {FileBarGraph, Bullseye} from "@styled-icons/bootstrap";
import {ReactComponent as LogoIcon} from "./logo.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  gap: 24px;
`;

export const NavLogo = styled(LogoIcon)`
  width: 80px;
  stroke: ${({theme}) => theme.colors.secondaryColor};
  fill: ${({theme}) => theme.colors.secondaryColor};
  filter: drop-shadow(4px 4px 4px ${({theme}) => theme.colors.shadowColor});
`;
export const Nav = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid transparent;
  font-size: 18px;
  transition: .3s ease-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.borderColor};
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