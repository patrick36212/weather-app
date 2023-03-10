import { MoonIcon, SunIcon, ThemeSwitchBody } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkThemeOn, toggleDarkTheme } from "./themeSlice";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkThemeOn = useSelector(selectIsDarkThemeOn);

  return (
    <ThemeSwitchBody onClick={() => dispatch(toggleDarkTheme())}>
      {isDarkThemeOn ? <MoonIcon /> : <SunIcon />}
    </ThemeSwitchBody>
  );
};

export default ThemeSwitch;
