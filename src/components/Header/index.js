import {
  Nav,
  HeaderWrapper,
  NavLogo,
  HeaderTitle,
  NavigationLink,
  HeaderLink,
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";
import { toCurrentWeather, toForecast } from "../../core/routes";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to={"/"}>
        <NavLogo />
        <HeaderTitle>Weather App</HeaderTitle>
      </HeaderLink>
      <Nav>
        <NavigationLink to={toCurrentWeather}>Current</NavigationLink>
        <NavigationLink to={toForecast}>Forecast</NavigationLink>
      </Nav>
      <ThemeSwitch />
    </HeaderWrapper>
  );
};

export default Header;
