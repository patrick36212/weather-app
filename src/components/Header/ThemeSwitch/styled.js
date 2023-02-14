import styled, { css } from "styled-components";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

export const SunIcon = styled(Sun)`
  width: 20px;
  padding: 2px;
`;

export const MoonIcon = styled(Moon)`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

export const ThemeSwitchBody = styled.div`
  width: 48px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 2px;
`;

export const ThemeSwitchButton = styled.button`
  background: ${({ theme }) => theme.colors.secondaryColor};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  position: absolute;
  transform: translateX(22px);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      transform: translateX(0);
    `}
`;
