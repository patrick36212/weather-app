import { Nav, NavLink, HeaderWrapper, NavLogo, HeaderTitle } from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <HeaderWrapper>
      <NavLogo />
      <HeaderTitle>Weather App</HeaderTitle>
      <Nav>
        <NavLink>Current</NavLink>
        <NavLink>Forecast</NavLink>
      </Nav>
      <ThemeSwitch isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </HeaderWrapper>
  );
};

export default Header;
