import { Nav, NavLink, HeaderWrapper, NavLogo, HeaderTitle } from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLogo />
      <HeaderTitle>Weather App</HeaderTitle>
      <Nav>
        <NavLink>Realtime</NavLink>
        <NavLink>Forecast</NavLink>
      </Nav>
      <ThemeSwitch />
    </HeaderWrapper>
  );
};

export default Header;