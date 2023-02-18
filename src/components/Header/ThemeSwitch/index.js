import { MoonIcon, SunIcon, ThemeSwitchBody } from "./styled";

const ThemeSwitch = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <ThemeSwitchBody onClick={() => setIsDarkTheme(!isDarkTheme)}>
      {isDarkTheme ? <MoonIcon /> : <SunIcon />}
    </ThemeSwitchBody>
  );
};

export default ThemeSwitch;
