import {
  Nav,
  NavLink,
  HeaderWrapper,
  ForecastIcon,
  RealTimeIcon,
  NavLogo
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";
import Search from "./Search";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLogo/>
      <Nav>
        <NavLink>
          <RealTimeIcon/>
          Realtime
        </NavLink>
        <NavLink>
          <ForecastIcon/>
          Forecast
        </NavLink>
      </Nav>
      <Search/>
      <ThemeSwitch/>
    </HeaderWrapper>)
}

export default Header;