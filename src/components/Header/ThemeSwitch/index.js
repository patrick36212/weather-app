import {
  MoonIcon,
  SunIcon,
  ThemeSwitchBody,
  ThemeSwitchButton,
} from "./styled";
import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeSwitchBody onClick={() => setIsDarkTheme(!isDarkTheme)}>
      <SunIcon />
      <MoonIcon />
      <ThemeSwitchButton isDarkTheme={isDarkTheme}></ThemeSwitchButton>
    </ThemeSwitchBody>
  );
};

export default ThemeSwitch;