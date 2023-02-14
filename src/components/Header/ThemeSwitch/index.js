import {
  MoonIcon,
  SunIcon,
  ThemeSwitchBody,
  ThemeSwitchButton,
} from "./styled";

const ThemeSwitch = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <ThemeSwitchBody onClick={() => setIsDarkTheme(!isDarkTheme)}>
      <SunIcon />
      <MoonIcon />
      <ThemeSwitchButton isDarkTheme={isDarkTheme}></ThemeSwitchButton>
    </ThemeSwitchBody>
  );
};

export default ThemeSwitch;
