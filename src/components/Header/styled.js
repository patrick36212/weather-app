import styled from "styled-components";
import { ReactComponent as LogoIcon } from "./logo.svg";

export const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  gap: 24px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 20px;
  margin: 0;
`;

export const NavLogo = styled(LogoIcon)`
  width: 80px;
  stroke: ${({ theme }) => theme.colors.secondaryColor};
  fill: ${({ theme }) => theme.colors.secondaryColor};
  filter: drop-shadow(4px 4px 4px ${({ theme }) => theme.colors.shadowColor});
`;
export const Nav = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`;

export const NavLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid transparent;
  font-size: 14px;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    transform: scale(1.02);
  }
`;