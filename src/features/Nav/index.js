import {
  AirQualityIcon,
  Nav,
  NavLink,
  NavWrapper,
  ForecastIcon,
  Logo,
  MapIcon,
  RealTimeIcon
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <NavWrapper>
      <Logo/>
      <Nav>
        <NavLink>
          <RealTimeIcon/>
          Realtime
        </NavLink>
        <NavLink>
          <ForecastIcon/>
          Forecast
        </NavLink>
        <NavLink>
          <AirQualityIcon/>
          Air quality
        </NavLink>
        <NavLink>
          <MapIcon/>
          Map
        </NavLink>
      </Nav>
      <ThemeSwitch/>
    </NavWrapper>)
}

export default Navigation;