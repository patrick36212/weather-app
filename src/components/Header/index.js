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

const Header = ({setCoordinates}) => {
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
      <Search setCoordinates={setCoordinates}/>
      <ThemeSwitch/>
    </HeaderWrapper>)
}

export default Header;