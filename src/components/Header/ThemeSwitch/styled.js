import styled from "styled-components";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

export const SunIcon = styled(Sun)`
  width: 24px;
`;

export const MoonIcon = styled(Moon)`
  width: 24px;
`;

export const ThemeSwitchBody = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;
