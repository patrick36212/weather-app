import styled, {css} from "styled-components";
import {Sun, Moon} from "@styled-icons/fa-solid";

export const SunIcon = styled(Sun)`
  width: 20px;
  padding: 2px;
  color: #00000040;
`;

export const MoonIcon = styled(Moon)`
  width: 20px;
  height: 20px;
  padding: 2px;
  color: #00000040;
`;

export const ThemeSwitchBody = styled.div`
  width: 48px;
  border-radius: 30px;
  background: #D9D9D9;
  border: 1px solid #00000040;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 2px;
`;

export const ThemeSwitchButton = styled.button`
  background: ${({theme}) => theme.colors.secondaryTileBackground};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  position: absolute;
  transition: .3s ease-in-out;
  cursor: pointer;
  
  ${({isDarkTheme}) => isDarkTheme && css`
    transform: translateX(22px);
  `}
`;